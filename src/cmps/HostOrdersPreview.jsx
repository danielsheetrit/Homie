export function HostOrdersPreview({ order }) {
    return (
        <div className="host-order-preview">
            <p>{order.buyer.fullName}</p>
        </div>
    )
}