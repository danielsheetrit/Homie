import { Component } from 'react'
import { Checkbox } from '@material-ui/core'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export class StayFilterAmenities extends Component {

    state = {
        isOpen: false,
    }

    closePopover = () => {
        this.setState({ isOpen: false })
    }

    filterAndClose = ev => {
        this.props.onFilter(ev)
        this.closePopover()
    }

    render() {

        const {
            tv,
            wifi,
            kitchen,
            accessibility,
            airConditioner,
            secured,
            fastFood,
            parking,
            aidKit,
            publicTransport,
        } = this.props

        const amenitiesName = [
            'tv',
            'wifi',
            'kitchen',
            'accessibility',
            'airConditioner',
            'secured',
            'fastFood',
            'parking',
            'aidKit',
            'publicTransport',
        ]

        const amenitiesLabel = [
            'Tv',
            'Wifi',
            'Kitchen',
            'Accessibility',
            'Air conditioner',
            'Secured',
            'Fast food',
            'Parking',
            'Aid Kit',
            'Public transport',
        ]

        const amenities = [
            tv,
            wifi,
            kitchen,
            accessibility,
            airConditioner,
            secured,
            fastFood,
            parking,
            aidKit,
            publicTransport,
        ]

        return (
            <div className="popover-container-amenities">
                <button
                    className="btn-group-button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Amenities
                </button>
                {this.state.isOpen &&
                    <ClickAwayListener onClickAway={this.closePopover}>
                        <form className="stay-filter-popover flex column">
                            <div className="amenities-grid">
                                {amenitiesName.map((amenity, idx) => {
                                    return <label
                                        key={idx}
                                        htmlFor={`${amenity}-id`}
                                    >
                                        <Checkbox
                                            id={`${amenity}-id`}
                                            name={amenity}
                                            onChange={this.props.handleChange}
                                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                                            color="default"
                                            checked={amenities[idx]}
                                        />
                                        {amenitiesLabel[idx]}
                                    </label>
                                })}
                            </div>
                            <div className="separator"></div>
                            <button
                                className="save-filter-btn"
                                onClick={(ev) => this.filterAndClose(ev)}
                            >
                                Save
                            </button>
                        </form>
                    </ClickAwayListener>
                }
            </div>
        )
    }
}