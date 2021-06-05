import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export class StayGuestModal extends Component {

    // state = {
    //     node: React.createRef(),

    // }



    render() {
        const { adults, children } = this.props;

        return (
            <div className="stay-guest-modal">
                <div className="flex justify-space-between align-center">
                    <p>Adults</p>
                    <div className="change-adult flex align-center">
                        <button name="adults" value={adults - 1} onClick={this.props.handleChange}
                        >-</button>
                        <div>{adults}</div>
                        <button name="adults" value={adults + 1} onClick={this.props.handleChange}
                        >+</button>
                    </div>
                </div>
                <div className="flex justify-space-between align-center">
                    <p>Children</p>
                    <div className="change-child flex align-center">
                        <button name="children" value={children - 1} onClick={this.props.handleChange}>-</button>
                        <div>{children}</div>
                        <button name="children" value={children + 1} onClick={this.props.handleChange}
                        >+</button>
                    </div>
                </div>
            </div>
        )
    }
}