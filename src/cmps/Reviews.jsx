import React, { Component } from 'react'
import { AvatarSymbol } from './AvatarSymbol.jsx'
import { StayRate } from './StayRate.jsx'

import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-modal'
Modal.setAppElement('#root')

export class Reviews extends Component {

    state = {
        node: React.createRef(),
        modalIsOpen: false,
        review: {
            rate: null,
            summary: ''
        }
    }

    handleChange = ev => {
        const field = ev.target.name
        const value = ev.target.name === 'rate' ? +ev.target.value : ev.target.value
        this.setState({ review: { ...this.state.review, [field]: value } })
    }

    onAddReview = ev => {
        ev.preventDefault()
        // console.log(this.state.review);
    }

    closeModal = ev => {
        console.log('node', this.state.node);
        console.log(ev.target);
        // const node = this.state.node
        // if (node.current.contains(ev.target)) {
        //     return
        // } else {
        //     document.removeEventListener('mousedown', this.closeModal);
        // }
            this.setState({ modalIsOpen: false })
    }

    openModal = () => {
        // document.addEventListener('mousedown', this.closeModal);
        this.setState({ modalIsOpen: true })
    }

    render() {
        // console.log(this.state.node);
        const { reviews, stay } = this.props
        const shortReviews = reviews.slice(0, 4)

        return (

            <div className="reviews-container">
                <StayRate
                    stay={stay}
                    isShowReviews={true}
                />
                <div>
                    {reviews && shortReviews.map((review, idx) => {
                        return <div key={idx} className="review-container flex column">
                            <div className="review-writer-container flex align-center">
                                <div>
                                    <AvatarSymbol url={review.by.imgUrl} />
                                </div>
                                <div className="review-writer flex column">
                                    <span>{review.by.fullname}</span>
                                    <span>15.02.21</span>
                                </div>
                            </div>
                            <div>
                                <p>{review.txt}</p>
                            </div>
                        </div>
                    })}
                </div>

                <button onClick={this.openModal}>Add review</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="review-modal"
                    overlayClassName="review-modal-overlay"
                    // ref={this.state.node}
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
                                name="summary"
                                value={this.state.review.summary}
                                placeholder="Describe your expirience." />
                        </div>
                        <button
                            onClick={this.onAddReview}
                            className="add-review-btn"
                        >Add</button>
                    </form>
                    <button className="exit-modal-btn" onClick={this.closeModal}>
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                </Modal>
            </div>
        )
    }
}