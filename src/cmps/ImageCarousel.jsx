import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class ImageCarousel extends Component {

    render() {
        const settings = {
            dots: true,
            // dots: <Dots />,
            centerPadding: '20px',
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            // dotsClass: 'carousel-dots'
            // appendDots: dots => (
            //     <ul style={{ bottom: "5px", color: 'red' }}> {dots} </ul>
            // ),

            // dotsClass: 'slick-dots mydot'

            // autoplay: true
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

// function Dots(props) {
//     console.log('Dots props', props
//     );
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, right: "10px", color: 'red' }}
//             onClick={onClick}
//         />
//     );
// }