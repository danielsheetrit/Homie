import { Component } from 'react';
import PulseLoader from "react-spinners/ClipLoader";

export class Loader extends Component {

    state = {
        color: '#ff385c'
    }

    render() {
        const isLoading = true

        return (
            <div className="pulse-loader">
                <PulseLoader 
                color={this.state.color} 
                loading={isLoading} 
                size={150} />
            </div>
        );
    }
}