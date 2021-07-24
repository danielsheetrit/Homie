import { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export class ImageCarousel extends Component {

    render() {
        const settings = {
            dots: true,
            centerPadding: '20px',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,

        };
        const { imgsSrc } = this.props

        return (
            <section className="image-carousel">
                <Slider {...settings}>
                    {imgsSrc.map((imgSrc, idx) => {
                        return (
                            <div key={idx}>
                                <img src={imgSrc} alt="house img" />
                            </div>
                        )
                    })}
                </Slider>
            </section>
        )
    }
}

function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: "10px", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: "10px", zIndex: 1, onHover: { opacity: 1 } }}
            onClick={onClick}
        />
    );
}