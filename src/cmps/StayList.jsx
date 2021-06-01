import { StayPreview } from './StayPreview.jsx'
// import { StayBookModal } from './StayBookModal.jsx'

export function StayList({ stays }) {
    if (!stays) return <h1>reloading</h1>
    return (
        <section className="stay-list flex">
            {stays.map(stay => {
                return <StayPreview stay={stay} key={stay._id} />
            })}
            {/* <StayBookModal stay={stays[0]} /> */}
        </section>
    )
}