import { Component } from 'react'
import { Slider } from '@material-ui/core'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export class StayFilterPriceSlider extends Component {

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

        const { minPrice, maxPrice, handleChange } = this.props
        const value = [minPrice, maxPrice]
        const max = 2500

        return (
            <div className="popover-container-priceslider">
                <button
                    className="btn-group-button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Price
                </button>
                {this.state.isOpen &&
                    <ClickAwayListener onClickAway={this.closePopover}>
                        <div className="stay-filter-popover flex column">
                            <h4>The average nightly price is $652.</h4>
                            <Slider
                                max={max}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                aria-labelledby="range-slider"
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
        );
    }
}