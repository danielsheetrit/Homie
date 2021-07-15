import { Component } from 'react'
import { connect } from 'react-redux'

import { stayService } from '../services/stay-service'

import { AssetDetails } from '../cmps/AssetDetails.jsx'
import { StayRate } from '../cmps/StayRate.jsx'
import { AvatarSymbol } from '../cmps/AvatarSymbol.jsx'
import { StayBookModal } from '../cmps/StayBookModal.jsx'
import { Amenities } from '../cmps/Amenities.jsx'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { Reviews } from '../cmps/Reviews.jsx'
import { GoogleMap } from '../cmps/GoogleMap.jsx'
import { Loader } from '../cmps/Loader.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons'

class _StayDetails extends Component {

    state = {
        stay: {},
        isShowMore: false,
    }

    componentDidMount() {
        this.setStayDetails()
        window.scrollTo(0, 0)
        document.body.classList.add('mini-header')
        document.body.classList.remove('hide-mini-search')
    }

    componentWillUnmount() {
        document.body.classList.remove('header-home-mode-open')
        document.body.classList.remove('header-onclick-mode')
    }

    async setStayDetails() {
        const { id } = this.props.match.params
        let stay = await stayService.getById(id)
        this.setState({ stay })
    }

    isOverChars = (summary) => {
        if (summary.length >= 150) return true
        return false
    }

    render() {
        const { loggedInUser } = this.props
        const { stay } = this.state
        const {
            loc,
            name,
            type,
            host,
            imgUrls,
            capacity,
            houseRules,
            amenities,
            summary,
            reviews
        } = stay

        if (!stay) return <Loader />

        return (
            <section className="stay-details-container">
                <div className="details-header-container">
                    <h1>{name}</h1>
                    <div className="details-header-details flex justify-space-between">
                        <div className="details-header-desc flex">
                            <StayRate
                                stay={stay}
                                isShowReviews={true} />
                            <span className="details-header-dot">·</span>
                            {loc && <a className="details-header-tags">
                                {loc.address}</a>}
                        </div>
                        <button className="details-header-save flex align-center">
                            <FontAwesomeIcon icon={faHeart} />
                            Save
                        </button>
                    </div>
                </div>

                {imgUrls && <div className="details-gallery-container">{
                    imgUrls.map((imgUrl, idx) => {
                        return <div
                            key={idx}
                            className={`details-img-container img-${idx + 1}`}
                        >
                            <img src={imgUrl} alt="details" />
                        </div>
                    })
                }</div>}

                <section className="host-main-container justify-space-between flex">
                    <div className="flex full column">
                        {host && <div className="host-header-container flex">
                            <div className="flex column full">
                                <h2>{type} hosted by {host.fullname}</h2>
                                <span className="host-header-capacity">Up to {capacity} guests</span>
                            </div>
                            <div>
                                <AvatarSymbol url={host.imgUrl} />
                            </div>
                        </div>}

                        <div>
                            {houseRules && <AssetDetails
                                type={type}
                                houseRules={houseRules} />}
                        </div>

                        {summary && <div className="about-asset-desc">
                            {this.state.isShowMore ?
                                <p>{summary}</p> : <LongTxt txt={summary} numOfChars={150} />}

                            {this.isOverChars(summary) && <button onClick={() => {
                                this.setState({ isShowMore: !this.state.isShowMore })
                            }}>{this.state.isShowMore ? 'Show Less' : 'Show more'}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>}
                        </div>}

                        {amenities && <div>
                            <Amenities amenities={amenities} />
                        </div>}
                    </div>

                    <div className="staybook-modal-container">
                        <StayBookModal stay={stay} />
                    </div>
                </section>

                <section>
                    {reviews && <Reviews
                        stay={stay}
                        reviews={reviews}
                        loggedInUser={loggedInUser}
                    />}
                </section>

                {loc && <section className="google-map-container">
                    <h2>Location</h2>
                    <span>{loc.address}</span>
                    <GoogleMap loc={loc} />
                </section>}

            </section>
        )
    }
}

function mapStateToProps({ userModule: { loggedInUser } }) {
    return {
        loggedInUser
    }
}

export const StayDetails = connect(mapStateToProps, null)(_StayDetails)