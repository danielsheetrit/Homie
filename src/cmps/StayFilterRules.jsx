import { Component } from 'react'
import { Checkbox } from '@material-ui/core'

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

export class StayFilterRules extends Component {

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

        const { isPets, isSmoking, handleChange } = this.props

        const rules = [isPets, isSmoking]
        const rulesLabel = ['Allow pets', 'Allow smoking']
        const rulesNames = ['isPets', 'isSmoking']

        return (
            <div className="popover-container-houserules">
                <button
                    className="btn-group-button"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    House rules
                </button>
                {this.state.isOpen &&
                    <ClickAwayListener onClickAway={this.closePopover}>
                        <form className="stay-filter-popover flex column">
                            {rulesNames.map((rule, idx) => {
                                return <label
                                    key={idx}
                                    htmlFor={`${rule}-id`}
                                >
                                    <Checkbox
                                        id={`${rule}-id`}
                                        name={rule}
                                        onChange={handleChange}
                                        checked={rules[idx]}
                                        inputProps={{ 'aria-label': 'controlled-checkbox' }}
                                        color="default"
                                    />
                                    {rulesLabel[idx]}
                                </label>
                            })}
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