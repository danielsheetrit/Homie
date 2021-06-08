import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStays, setFilter } from '../store/actions/stay.actions'

import { CityCard } from '../cmps/CityCard.jsx'
import { StayList } from '../cmps/StayList.jsx'
import { Loader } from '../cmps/Loader.jsx'

export class _Home extends Component {

    state = {
        city: ''
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        document.body.classList.add('header-home-mode-open')

        window.onscroll = () => {
            if (window.pageYOffset >= 85) {
                document.body.classList.remove('header-home-mode-open')
            } else {
                document.body.classList.add('header-home-mode-open')
                document.body.classList.remove('header-onclick-mode')
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
        document.body.classList.remove('header-home-mode-open')
        document.body.classList.remove('header-onclick-mode')

    }

    onSelect = async city => {
        await this.setState({ city })
        await this.props.setFilter(this.state)
        this.props.history.push('/stay')
    }

    render() {

        const filterStays = this.props.stays.slice(0, 5)
        const cities = [
            'amsterdam',
            'paris',
            'new-york',
            'tokyo',
            'london',
            'barcelona'
        ]

        const citiesUrl = [
            'amsterdam_nqxozm',
            'paris_lljj5s',
            'new-york_en6f3a',
            'tokyo_cl5jez',
            'london_ddezqi',
            'barcelona_aq6xpb'
        ]

        if (!filterStays) return <Loader />

        return (

            <section className="stay-home main-container full">
                <div className="home-hero flex justify-center full">
                    <div className="hero-txt-container">
                        <h2>
                            The best journey <br />
                    takes you home.
                    </h2>
                        <Link to="/stay">
                            <button>Explore now!</button>
                        </Link>
                    </div>
                </div>
                <h2>Popular locations</h2>

                <div className="city-card-container">
                    {cities.map((city, idx) => {
                        return <CityCard
                            key={idx}
                            onSelect={this.onSelect}
                            title={city}
                            imgUrl={citiesUrl[idx]}
                        />
                    })}
                </div>

                <div className="best-loc">
                    <div className="best-loc-header flex justify-space-between">
                        <h2>Top rated homes</h2>
                        <Link to="/stay">Show more</Link>
                    </div>
                    <div className="top-rated-container">
                        <StayList stays={filterStays} />
                    </div>
                </div>

                <section>
                        <h2>Homie's family</h2>
                        <div className="become-host full">
                            <div className="host-container flex">
                                <div className="content-container flex">
                                    <h2>Become a host</h2>
                                    <p>Earn extra income with Homie,
                                <br /> join us and milion other hosts to unlock new opportunities, by sharing your space.<br />
                                hosting can help you turn your extra space into extra income and pursue more of what you love.</p>
                                    <button>Join us now!</button>
                                </div>
                                <div className="img-container flex"></div>
                            </div>
                        </div>
                    </section>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
                    stays: state.stayModule.stays,
        filterBy: state.stayModule.filterBy
    }
}

const mapDispatchToProps = {
                    getStays,
                    setFilter
                }

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)