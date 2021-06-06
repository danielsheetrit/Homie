import { Link } from 'react-router-dom'
import { LongTxt } from './LongTxt.jsx'

export function StayOrders({ orders, getStatusClassName }) {
    console.log('StayOrders orders', orders)
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
                        const statusColor = getStatusClassName(order.status)
                        return (
                            <tr key={order._id}>
                                <td><LongTxt txt={order.stay.name} numOfChars={20} /></td>
                                <td>{order.startDate}</td>
                                <td>{order.endDate}</td>
                                <td>{order.city}</td>
                                <td>{order.totalPrice}</td>
                                <td className="order-details"><Link to={`/stay/${order.stay._id}`}>Details</Link></td>
                                <td className={statusColor}>{order.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}