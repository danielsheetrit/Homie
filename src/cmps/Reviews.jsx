import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { AvatarSymbol } from './AvatarSymbol.jsx'
import { StayRate } from './StayRate.jsx'

import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

import { stayService } from '../services/stay-service.js'

Modal.setAppElement('#root')

export class Reviews extends Component {

    state = {
        modalIsOpen: false,
        review: {
            rate: null,
            txt: ''
        }
    }

    handleChange = ev => {
        const field = ev.target.name
        const value = ev.target.name === 'rate' ? +ev.target.value : ev.target.value
        this.setState({ review: { ...this.state.review, [field]: value } })
    }

    onAddReview = (ev) => {
        ev.preventDefault()
        const { stay, loggedInUser } = this.props
        const { review } = this.state
        review.by = loggedInUser
        stayService.save(stay, review)
        // window.location.hash = `/stay/${stay._id}`
        this.setState({ modalIsOpen: false })
    }

    closeModal = ev => {
        if (ev.x > 495 && ev.x < 1023) return
        this.setState({ modalIsOpen: false })
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    render() {

        const { reviews, stay, loggedInUser } = this.props
        // const shortReviews = reviews.slice(0, 4)
        return (
            <div className="reviews-container">
                <StayRate
                    stay={stay}
                    isShowReviews={true}
                />
                <div>
                    {reviews && reviews.map((review, idx) => {
                        return <div key={idx} className="review-container flex column">
                            <div className="review-writer-container flex align-center">
                                <div>
                                    <AvatarSymbol url={review.by.imgUrl} />
                                </div>
                                <div className="review-writer flex column">
                                    <span>{review.by.fullname}</span>
                                    <span>{this.state.curTime}</span>
                                </div>
                            </div>
                            <div>
                                <p>{review.txt}</p>
                            </div>
                        </div>
                    })}
                </div>

                {loggedInUser ?
                    <button onClick={this.openModal}>
                        Add review
                    </button> :
                    <Link className="link" to="/signup">
                        sign up to live a comment
                    </Link>}

                <Modal
                    isOpen={this.state.modalIsOpen}
                    className="review-modal"
                    overlayClassName="review-modal-overlay"
                >
                    <h2>Add review</h2>
                    <div className="review-writer-modal flex align-center">
                        <div>
                            <AvatarSymbol />
                        </div>
                        <div className="review-writer-modal-details flex column">
                            <span>Asi ho gaon</span>
                        </div>
                    </div>
                    <ClickAwayListener onClickAway={this.closeModal}>

                        <form>
                            <Box
                                className="flex column"
                                component="fieldset"
                                mb={3}
                                borderColor="transparent"
                            >
                                <label
                                    className="rating-box-label"
                                    htmlFor="review-rating">Rate the host:</label>
                                <Rating
                                    id="review-rating"
                                    name="rate"
                                    value={this.state.review.rate}
                                    onChange={this.handleChange}
                                />
                            </Box>
                            <div className="flex column">
                                <label htmlFor="review-textarea">Summary:</label>
                                <textarea
                                    id="review-textarea"
                                    onChange={this.handleChange}
                                    type="text"
                                    name="txt"
                                    value={this.state.review.txt}
                                    placeholder="Describe your expirience." />
                            </div>
                            <button
                                onClick={this.onAddReview}
                                className="add-review-btn"
                            >Add</button>
                        </form>
                    </ClickAwayListener>

                    <button className="exit-modal-btn" onClick={this.closeModal}>
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                </Modal >

            </div >
        )
    }
}