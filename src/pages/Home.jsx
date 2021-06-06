import { Component } from 'react'
import { connect } from 'react-redux'
import { getStays, setFilter } from '../store/actions/stay.actions'

import { CityCard } from '../cmps/CityCard.jsx'
import { StayList } from '../cmps/StayList.jsx'

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

        console.log(this.state.city);
        const filterStays = this.props.stays.slice(0, 4)

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

        return (

            <section className="stay-home main-container full">
                <div className="home-hero flex justify-center full">
                    <h2>
                        The best journey <br />
                    takes you home.
                    </h2>
                </div>
                <h2>Popular locations</h2>

                <div className="city-card-container">
                    {cities.map((city, idx) => {
                        return <CityCard
                            onSelect={this.onSelect}
                            title={city}
                            imgUrl={citiesUrl[idx]}
                        />
                    })}
                </div>

                <div className="best-loc justify-center flex">
                    <h2>Top rated homes</h2>
                    <div className="top-rated-container">
                        <StayList stays={filterStays} />
                    </div>
                </div>

                <div className="become-host">
                    <h2>become a host</h2>
                </div>

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