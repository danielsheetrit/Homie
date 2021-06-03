import { Component } from 'react'
import { StayRate } from './StayRate.jsx'
import { GradientBtn } from './GradientBtn.jsx'

import { DateRangePicker } from 'react-dates'
import { withSnackbar } from 'notistack'

class _StayBookModal extends Component {

    state = {
        startDate: '',
        endDate: '',
        filterBy: {
            guest: 1
        },
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.enqueueSnackbar('Your order received.', {
            variant: 'success',
        })
        setTimeout(() => this.props.closeSnackbar(), 3000)
        window.location.hash = '/'
    }

    render() {
        const { stay } = this.props
        if (!stay) return <p>Loading</p>
        return (
            <section className="stay-book-modal">
                <div className="modal-header">
                    <p><span className="price">${stay.price}</span> / night</p>

                    <StayRate stay={stay} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-select">
                        <DateRangePicker
                            startDateId="your_unique_start_date_id"
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            endDateId="your_unique_end_date_id"
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                            startDatePlaceholderText="check in"
                            endDatePlaceholderText="check out"
                            noBorder
                            inputIconPosition="after"
                            small
                        />
                        <input type="text" name="" id="" placeholder="guest" />
                    </div>
                    <GradientBtn />
                </form>
            </section>
        )
    }
}

export const StayBookModal = withSnackbar(_StayBookModal);