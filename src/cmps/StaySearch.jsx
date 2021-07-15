import { Component } from 'react'
import { connect } from 'react-redux'

import { getStays } from '../store/actions/stay.actions'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class _StaySearch extends Component {

    state = {
        filterBy: {
            city: '',
            guest: 0
        },
        startDate: null,
        endDate: null
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
        document.body.classList.add('header-onclick-mode')
        document.addEventListener('mouseup', this.closeHeaderOnclickMode);
    }

    closeHeaderOnclickMode = ev => {
        const node = this.props.node
        if (node.current.contains(ev.target)) {
            return
        } else {
            document.body.classList.remove('header-onclick-mode')
            document.removeEventListener('mouseup', this.closeHeaderOnclickMode);
        }
    }

    render() {
        const { city } = this.props.filterBy
        return (
            <section className="stay-search flex align-center">
                <div className="search-mini"
                    onClick={this.handleSearchMini}
                >
                    {city || 'Start your search'}
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
                                placeholder={city || "Where are you going?"} />
                        </div>
                    </div>
                    <div className="separator-vertical"></div>
                    <div className="search-input date-input flex column justify-center">
                        <div className="dates-label">
                            <label>Dates</label>
                        </div>
                        <DateRangePicker
                            numberOfMonths={1}
                            startDateId="start"
                            startDate={this.state.startDate}
                            endDateId="end"
                            endDate={this.state.endDate}
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
                    <div className="separator-vertical"></div>
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

function mapStateToProps(state) {
    return {
        filterBy: state.stayModule.filterBy
    }
}

const mapDispatchToProps = {
    getStays,
}

export const StaySearch = connect(mapStateToProps, mapDispatchToProps)(_StaySearch)