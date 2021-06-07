import moment from 'moment'
import { orderService } from '../services/order-service'

export function HostOrdersPreview({ order, updateOrder }) {
    const guests = order.guests.adults + order.guests.children
    const defaultImgUrl = order.buyer.imgUrl ? order.buyer.imgUrl : 'https://ozgrozer.github.io/100k-faces/0/0/000924.jpg'

    function onSetStatus(ev) {
        console.log(ev.target.name)
        const updatedOrder = { ...order }
        updatedOrder.status = ev.target.name
        console.log('order', updatedOrder)
        updateOrder(updatedOrder);
    }

    return (
        <div className=" flex host-order-preview">
            <div className="img-container">
                {/* <img src={order.buyer.imgUrl} /> */}
                <img src={defaultImgUrl} />
            </div>
            <div className="order-content">
                <h3>Requested by: {order.buyer.fullName}</h3>
                <p>Expire in 12 hours</p>
                <p>{guests} guests - {order.startDate} - {order.endDate} -
                <span> {order.stay.name}</span>

                </p>
            </div>
            {/* <p>{order.status}</p> */}
            <p><button name="accept" onClick={onSetStatus}>Accept</button><button name="reject" onClick={onSetStatus}>Reject</button></p>
        </div>
    )
}