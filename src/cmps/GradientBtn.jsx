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

    render() {

        const txt = this.props.txt
        return (
            <button className="gradientBtn"
                onMouseMove={this.handleMouseMove}
            >
                {txt ? txt : 'Check availability'}
            </button>
        )

    }
}