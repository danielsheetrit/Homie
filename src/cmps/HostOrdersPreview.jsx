import moment from 'moment'

export function HostOrdersPreview({ order, updateOrder }) {
    const guests = order.guests.adults + order.guests.children
    const defaultImgUrl = order.buyer.imgUrl ? order.buyer.imgUrl : 'https://ozgrozer.github.io/100k-faces/0/0/000924.jpg'

    function onSetStatus(ev) {
        const updatedOrder = { ...order }
        updatedOrder.status = ev.target.name
        updateOrder(updatedOrder);
    }

    return (
        <div className="host-order-preview flex">
            <div className="img-container">
                <img src={defaultImgUrl} alt="user" />
            </div>
            <div className="order-content">
                <h3>Requested by: {order.buyer.fullName}</h3>
                <p>Expire in 12 hours</p>
                <p>{guests} guests - {order.startDate} - {order.endDate} -
                <span> {order.stay.name}</span>
                </p>
            </div>
            {/* <p>{order.status}</p> */}
            {order.status === 'pending' && <p><button className="accepted" name="accepted" onClick={onSetStatus}>Accept</button> / <button className="rejected" name="rejected" onClick={onSetStatus}>Reject</button></p>}
            {order.status !== 'pending' && <p className={order.status}>{order.status}</p>}
        </div>
    )
}