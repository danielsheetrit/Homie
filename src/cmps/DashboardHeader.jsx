import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function DashboardHeader({ stays, orders }) {
    console.log('stays', stays, 'orders', orders)

    function getMonthlyEarning() {
        let totalEarning = 0;
        const currMonth = new Date(Date.now()).getMonth() + 1
        const currYear = new Date(Date.now()).getFullYear()
        orders.forEach(order => {
            const orderMonth = new Date(order.startDate).getMonth() + 1
            const orderYear = new Date(order.startDate).getFullYear()
            if (currMonth === orderMonth && currYear === orderYear) {
                totalEarning += order.totalPrice
            }
        })
        return totalEarning.toLocaleString('en-US')
    }

    function getTotalAvgRate() {
        let totalRate = 0;
        stays.forEach(stay => {
            const rates = stay.reviews.map((review) => review.rate);
            let stayAvgRate = rates.reduce((a, b) => a + b, 0)
            totalRate += (stayAvgRate / rates.length)
        })
        let RateToDisplay = (totalRate / stays.length) ? (totalRate / stays.length).toFixed(1) : 0
        // const reviews = rates
        // return `${RateToDisplay} (${reviews})`
        return RateToDisplay
    };

    function getOrdersStatus(status) {
        const statusOrders = orders.filter(order => order.status === status)
        return statusOrders.length
    }

    function getActiveGuests() {
        const now = new Date(Date.now())
        const activeUsers = orders.filter(order => {
            const checkIn = new Date(order.startDate)
            const checkOut = new Date(order.endDate)
            return checkIn < now && checkOut > now
        })
        return activeUsers
    }

    return (
        <section className="dashboard-header flex">
            <div>
                <h3>Orders</h3>
                <div className="orders-status-container flex">
                    <p><span>{orders.length}</span></p>
                    <div className="status-circles flex">
                        <p title="pending" className="pending circle">{getOrdersStatus('pending')}</p>
                        <p title="accepted" className="accepted circle">{getOrdersStatus('accepted')}</p>
                        <p title="rejected" className="rejected circle">{getOrdersStatus('rejected')}</p>
                    </div>
                </div>
            </div>
            <div className="flex column">
                <h3>Total rate</h3>
                <div className="rate flex">
                    <FontAwesomeIcon icon={faStar} color='#FF385C' className="star-icon" />
                    <span>{getTotalAvgRate()}</span>
                </div>
            </div>
            <div>
                <h3>Monthly earning</h3>
                <p><span>${getMonthlyEarning()}</span></p>
            </div>

            <div>
                <h3>Active guests</h3>
                <div className="active-users flex">
                    <span>{getActiveGuests().length}</span>
                    <div className="images-container flex">
                        {getActiveGuests().map(order => {
                            return (
                                <div className="img-container">
                                    <img src={order.buyer.imgUrl} alt="guest" key={order._id} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}