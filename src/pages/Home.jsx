import { Component } from 'react'
import { CityCard } from '../cmps/CityCard'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { StayList } from '../cmps/StayList.jsx'

class _Home extends Component {

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
    }

    render() {
        const filterStays = this.props.stays.slice(0, 4)
        return (
            <section className="stay-home main-container full">
                <div className="home-hero flex justify-center full">
                    <h2>The best journey <br /> takes you home.</h2>
                </div>
                <h2>Explore new places</h2>
                <div className="city-card-container">
                    <CityCard title={'amsterdam'} imgUrl={'amsterdam_nqxozm'} />
                    <CityCard title={'paris'} imgUrl={'paris_lljj5s'} />
                    <CityCard title={'new-york'} imgUrl={'new-york_en6f3a'} />
                    <CityCard title={'tokyo'} imgUrl={'tokyo_cl5jez'} />
                    <CityCard title={'london'} imgUrl={'london_ddezqi'} />
                    <CityCard title={'barcelona'} imgUrl={'barcelona_aq6xpb'} />
                </div>
                <div className="best-loc justify-center flex">
                    <h2>Top rated homes</h2>
                    <div className="top-rated-container">
                        <StayList onSetCurrentPage={this.props.onSetCurrentPage} stays={filterStays} />
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
    }
}

const mapDispatchToProps = {
    getStays,
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
