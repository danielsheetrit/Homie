import { Component } from 'react'
import Select from 'react-select'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export class StayFilterStayType extends Component {

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

        const options = [
            { value: '', label: 'Any kind' },
            { value: 'Apartment', label: 'Apartment' },
            { value: 'Entire home', label: 'Entire home' },
            { value: 'Studio', label: 'Studio' },
            { value: 'Shared apartment', label: 'Shared apartment' }
        ]

        return (
            <div className="popover-container-staytype">
                <button
                    className="btn-group-button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Stay type
                </button>
                {this.state.isOpen &&
                    <ClickAwayListener onClickAway={this.closePopover}>
                        <div className="stay-filter-popover flex column">
                            <h4>4 types of compounds at your service.</h4>
                            <Select
                                options={options}
                                onChange={this.props.handleChange}
                                classNamePrefix="select"
                                className="basic-single"
                            />
                            <div className="separator"></div>
                            <button
                                className="save-filter-btn"
                                onClick={(ev) => this.filterAndClose(ev)}
                            >
                                Save
                        </button>
                        </div>
                    </ClickAwayListener>
                }
            </div>
        )
    }
}