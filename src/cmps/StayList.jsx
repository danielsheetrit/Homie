import { StayPreview } from './StayPreview.jsx'

export function StayList({ stays }) {
    if (!stays) return <h1>reloading</h1>
    return (
        <section className="stay-list flex">
            {stays.map(stay => {
                return <StayPreview
                    stay={stay}
                    key={stay._id}
                />
            })}
        </section>
    )
}