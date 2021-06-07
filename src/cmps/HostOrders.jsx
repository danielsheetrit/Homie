import { HostOrdersPreview } from '../cmps/HostOrdersPreview.jsx'

export function HostOrders({ hostOrders, updateOrder }) {
    if (!hostOrders) return <h1>Loading...</h1>
    return (
        <section>
            {hostOrders.map(order => {
                return <HostOrdersPreview order={order} key={order._id} updateOrder={updateOrder} />
            })}
        </section>
    )
}
