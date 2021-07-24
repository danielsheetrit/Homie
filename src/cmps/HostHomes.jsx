import { HostHomePreview } from './HostHomePreview.jsx'
export function HostHomes({ hostHomes, hostOrders }) {
    if (!hostHomes) return <h1>Loading</h1>
    return (
        <section className="host-homes">
            <h2>Houses you offer: {hostHomes.length}</h2>
            {hostHomes.map(stay => {
                return <HostHomePreview stay={stay} key={stay._id} hostOrders={hostOrders} />
            })}
        </section>
    )
}
