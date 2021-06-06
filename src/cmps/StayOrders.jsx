export function StayOrders({ orders }) {
    console.log('StayOrders orders', orders)
    return (
        <section>
            <h1>My Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>start date</th>
                        <th>end date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {orders.map(order => {
                             return <OrderPreview key={order._id}/>
                        })} */}
                </tbody>
            </table>
        </section>
    )
}