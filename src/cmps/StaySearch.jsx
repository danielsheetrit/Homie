import { Component } from 'react'

import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class _StaySearch extends Component {

    state = {
        filterBy: {
            city: '',
            guest: 0
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        const { filterBy } = this.state
        this.setState({ filterBy: { ...filterBy, [name]: value } })
    }

    onSubmitStay = ev => {
        ev.preventDefault()
        const { city, guest } = this.state.filterBy
        const { startDate, endDate } = this.state
        const filterBy = {
            startDate: startDate?._d || '',
            endDate: endDate?._d || '',
            city,
            guest: +guest
        }
        this.props.getStays(filterBy)
    }

    handleSearchMini = () => {
        document.body.classList.remove('mini-header')
        document.body.classList.add('hide-mini-search')
    }

    render() {

        return (
            <section className="stay-search flex align-center">
                <div onClick={this.handleSearchMini} className="search-mini">
                    Start your search
                    <FontAwesomeIcon icon={faSearch} />
                </div>

                <form
                    className={`flex`}
                    onSubmit={this.onSubmitStay}
                >
                    <div className="search-input country-input flex column justify-center">
                        <div className="location-label">
                            <label htmlFor="location">Location</label>
                        </div>
                        <div className="city">
                            <input
                                onChange={this.handleChange}
                                autoComplete="off"
                                type="text"
                                name="city"
                                id="location"
                                placeholder="Where are you going?" />
                        </div>
                    </div>

                    <div className="search-input date-input flex column justify-center">
                        <div className="dates-label">
                            <label>Dates</label>
                        </div>
                        <DateRangePicker
                            startDateId="your_unique_start_date_id"
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            endDateId="your_unique_end_date_id"
                            onDatesChange={
                                ({ startDate, endDate }) => this.setState({ startDate, endDate })}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                            startDatePlaceholderText="Check in"
                            endDatePlaceholderText="Check out"
                            noBorder
                            inputIconPosition="after"
                            small
                        />
                    </div>

                    <div className="search-input guest-input flex column justify-center">
                        <div className="guests-label">
                            <label htmlFor="guest">Guests</label>
                        </div>
                        <div className="guest-input">
                            <input
                                onChange={this.handleChange}
                                autoComplete="off"
                                type="text"
                                name="guest"
                                id="guest"
                                placeholder="1 guest" />
                        </div>
                    </div>

                    <button>
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </button>
                </form>
            </section>
        )
    }
}

const mapDispatchToProps = {
    getStays,
}

export const StaySearch = connect(null, mapDispatchToProps)(_StaySearch)