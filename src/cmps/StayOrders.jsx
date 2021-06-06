import { Link } from 'react-router-dom'
import { LongTxt } from './LongTxt.jsx'
export function StayOrders({ orders }) {
    console.log('StayOrders orders', orders)
    return (
        <section>
            <h1>My Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>City</th>
                        <th>Total Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {orders.map(order => {
                             return <OrderPreview key={order._id}/>
                        })} */}
                    {orders.map(order => {
                        return (
                            <tr key={order._id}>
                                <td><LongTxt txt={order.stay.name} numOfChars={20} /></td>
                                <td>{order.startDate}</td>
                                <td>{order.endDate}</td>
                                <td>{order.city}</td>
                                <td>{order.totalPrice}</td>
                                <td><Link to={`/stay/${order.stay._id}`}>Details</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}