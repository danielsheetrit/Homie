import { Component } from 'react'
import { StayRate } from './StayRate.jsx'
import { GradientBtn } from './GradientBtn.jsx'
import { StayGuestModal } from './StayGuestModal.jsx'
import { DateRangePicker } from 'react-dates'
import { withSnackbar } from 'notistack'
import moment from 'moment'

class _StayBookModal extends Component {
    state = {
        trip: {
            startDate: '',
            endDate: '',
            // days: 0,
            adults: 1,
            children: 0
        },
        filterBy: {
            guest: 1
        },
        isModalOpen: false,
        isReserveMode: false
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        const { startDate, endDate } = this.state.trip
        if (startDate && startDate !== '' && endDate && !this.state.isReserveMode) {
            this.setState({ ...this.state, isReserveMode: true })
            return
        } else if (startDate && startDate && this.state.isReserveMode) {
            this.props.enqueueSnackbar('Your order received.', {
                variant: 'success',
            })
            setTimeout(() => this.props.closeSnackbar(), 3000)
            this.setState({ ...this.state, isReserveMode: false })
            window.location.hash = '/'
        } else {
            this.props.enqueueSnackbar('Please enter all fields.', {
                variant: 'error',
            })
            setTimeout(() => this.props.closeSnackbar(), 3000)
        }
    }

    calcDays = () => {
        const startDate = this.state.trip.startDate.format('YYYY-MM-DD')
        const endDate = this.state.trip.endDate.format('YYYY-MM-DD')
        const firstDay = moment(startDate)
        const lastDay = moment(endDate)
        const days = lastDay.diff(firstDay, 'days') + 1
        return days;
    }

    toggleModal = (ev) => {
        ev.preventDefault()
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleChange = (ev) => {
        ev.preventDefault()
        const { name, value } = ev.target
        this.setState({ ...this.state, trip: { ...this.state.trip, [name]: + value } })
    }

    render() {
        const { stay } = this.props
        const { isModalOpen, isReserveMode } = this.state;
        const { adults, children, startDate, endDate } = this.state.trip;
        if (!stay) return <p>Loading</p>
        let days = 1;
        if (startDate && endDate) days = this.calcDays()

        return (
            <section className="stay-book-modal">
                <div className="modal-header">
                    <p><span className="price">${stay.price}</span> / night</p>

                    <StayRate stay={stay} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <span className="check">CHECK IN</span>
                    <span className="check">CHECK OUT</span>
                    <div className="form-select">
                        <div className="date-container">
                            <DateRangePicker readOnly displayFormat="MM-DD-YYYY"
                                startDateId="your_unique_start_date_id"
                                startDate={this.state.trip.startDate}
                                endDate={this.state.trip.endDate}
                                endDateId="your_unique_end_date_id"
                                onDatesChange={({ startDate, endDate }) => this.setState({ ...this.state, trip: { ...this.state.trip, startDate, endDate } })}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                // startDatePlaceholderText="check in"
                                // endDatePlaceholderText="check out"
                                startDatePlaceholderText="Add date"
                                endDatePlaceholderText="Add date"
                                noBorder
                                inputIconPosition="after"
                                small
                            />
                        </div>
                        <div className="guest-container">
                            <span className="guests">GUESTS</span>
                            <button className="btn-guests" onClick={this.toggleModal}>{this.state.trip.adults + this.state.trip.children}</button>
                            {isModalOpen && <StayGuestModal handleChange={this.handleChange} adults={adults} children={children} />}
                        </div>
                    </div>
                    <GradientBtn isReserveMode={isReserveMode} />
                    {isReserveMode &&
                        <div className="reserve-mode">
                            <p>You won't be charged yet</p>
                            <div><span>${stay.price} x {days} nights</span> <span>${stay.price * days}</span></div>
                            <div><span>Service fee</span> <span>$0</span></div>
                            <div><span>Occupancy taxes and fees</span> <span>$10</span></div>
                            <div><span>Total</span> <span>${stay.price * days + 10}</span></div>
                        </div>}
                </form>
            </section>
        )
    }
}

export const StayBookModal = withSnackbar(_StayBookModal);