import { Component } from 'react'

export class GradientBtn extends Component {
    state = {
        x: 0,
        y: 0
    };

    handleMouseMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });

        const mouseX = e.pageX - e.currentTarget.offsetLeft;
        const mouseY = e.pageY - e.currentTarget.offsetTop;
        e.currentTarget.style.cssText = `
            --mouse-x: ${mouseX}; 
            --mouse-y: ${mouseY};
            `;
    };

    // handleHoverOff = e => {
    //     console.log('handleHoverOff');
    //     this.setState({
    //         x: 0,
    //         y: 0
    //     });
    //     e.currentTarget.style.cssText = `
    //         --mouse-x: 0; 
    //         --mouse-y: 0;
    //         `;
    // }

    render() {
        return (

            <button className="gradientBtn" onMouseMove={this.handleMouseMove}

            // onMouseLeave={this.handleHoverOff}
            >
                Check availability
            </button>
        )

    }
}
