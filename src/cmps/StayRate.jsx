import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function StayRate({ stay, isShowReviews }) {

    const reviews = stay.reviews ? stay.reviews.length : 0

    let avgRate = stay.reviews ? stay.reviews.reduce((sum, obj) => {
        return sum + obj.rate;
    }, 0) / stay.reviews.length : 0

    if (avgRate % 1 !== 0) { // if decimal
        if (avgRate.toString().split(".")[1].length > 1)
            avgRate = avgRate.toFixed(2)
    }
    const numOfReview = isShowReviews ? ' reviews' : ''

    return (
        <section className='stay-rate flex'>
            <FontAwesomeIcon icon={faStar} />
            <div>
                {!avgRate && <span>New</span>}
                {avgRate !== 0 && <span>{avgRate}
                    <span className="num-of-review">
                        ({reviews + numOfReview})
                    </span>
                </span>}
            </div>
        </section>
    )
}