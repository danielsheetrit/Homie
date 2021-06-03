import { Link } from 'react-router-dom'
import { ImageCarousel } from './ImageCarousel'
import { StayRate } from './StayRate.jsx'
import { LongTxt } from './LongTxt.jsx';

export function StayPreview({ stay }) {
    return (
        <section className="stay-preview">
            <Link to={`stay/${stay._id}`}>
                <div className="stay-image-container">
                    <ImageCarousel imgsSrc={stay.imgUrls} />
                </div>
                <StayRate stay={stay} />
                <p>{stay.type} in {stay.loc.country}</p>
                <LongTxt txt={stay.summary} numOfChars={28} />
                <p><span className="price">${stay.price}</span> / night</p>
            </Link>
        </section>
    )
}