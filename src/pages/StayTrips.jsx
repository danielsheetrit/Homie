import { Link } from 'react-router-dom'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { connect } from 'react-redux'

export function _StayTrips({ orders }) {
    // console.log('StayTrips orders', orders)

    function getStatusClassName(status) {
        let classColor;
        if (status === 'approved') {
            classColor = 'approved'
        } else if (status === 'pending') {
            classColor = 'pending'
        } else {
            classColor = 'rejected'
        }
        return classColor
    }

    return (
        <section className="stay-orders">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>City</th>
                        <th>Total Price</th>
                        <th>Details</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => {
                        // const statusColor = getStatusClassName(order.status)
                        return (
                            <tr key={order._id}>
                                <td><LongTxt txt={order.stay.name} numOfChars={20} /></td>
                                <td>{order.startDate}</td>
                                <td>{order.endDate}</td>
                                <td>{order.city}</td>
                                <td>{order.totalPrice}</td>
                                <td className="order-details"><Link to={`/stay/${order.stay._id}`}>Details</Link></td>
                                {/* <td className={statusColor}>{order.status}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        orders: state.orderModule.orders,
        stays: state.stayModule.stays
    }
}

export const StayTrips = connect(mapStateToProps)(_StayTrips)