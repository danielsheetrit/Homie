import { Component } from 'react'
import { connect } from 'react-redux'
import { setFilter, getStays } from '../store/actions/stay.actions'

import { StayFilterStayType } from './StayFilterStayType.jsx'
import { StayFilterRules } from './StayFilterRules.jsx'
import { StayFilterAmenities } from './StayFilterAmenities.jsx'
import { StayFilterPriceSlider } from './StayFilterPriceSlider.jsx'

class _StayFilter extends Component {

    state = {
        filterBy: {
            type: '',
            minPrice: 0,
            maxPrice: 1500,
            isPets: false,
            isSmoking: false,
            tv: false,
            wifi: false,
            kitchen: false,
            accessibility: false,
            airConditioner: false,
            secured: false,
            fastFood: false,
            parking: false,
            aidKit: false,
            publicTransport: false,
        }
    }

    handleChange = (ev, price) => {

        const filterBy = this.state.filterBy
        let value;
        let field;

        if (ev.label) {
            this.setState({
                filterBy: { ...filterBy, type: ev.value }
            })
            return
        }
        if (price && ev.type === "mousemove") {
            const [minPrice, maxPrice] = price
            this.setState({
                filterBy: { ...filterBy, minPrice, maxPrice }
            })
            return
        }

        value = ev.target.value
        field = ev.target.name

        if (ev.target.checked) value = ev.target.checked

        this.setState({
            filterBy: { ...filterBy, [field]: value }
        })
    }

    onFilter = async ev => {
        ev.preventDefault()
        await this.props.setFilter(this.state.filterBy)
        this.props.getStays(this.props.filterBy)
    }

    render() {
    
        const { filterBy } = this.state
        const {
            type,
            minPrice,
            maxPrice,
            isPets,
            isSmoking,
            tv,
            wifi,
            kitchen,
            accessibility,
            airConditioner,
            secured,
            fastFood,
            parking,
            aidKit,
            publicTransport,
        } = filterBy

        const city = this.props.filterBy.city

        return (
            <section className="stay-filter">
                <h2 className="filter-header">
                    {city ? `Stays in ${city}` : 'Our Stays'}
                </h2>
                <div className="btn-group flex">

                    <StayFilterPriceSlider
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        handleChange={this.handleChange}
                        onFilter={this.onFilter} />

                    <StayFilterStayType
                        type={type}
                        handleChange={this.handleChange}
                        onFilter={this.onFilter} />

                    <StayFilterRules
                        isPets={isPets}
                        isSmoking={isSmoking}
                        handleChange={this.handleChange}
                        onFilter={this.onFilter} />

                    <StayFilterAmenities
                        tv={tv}
                        wifi={wifi}
                        kitchen={kitchen}
                        accessibility={accessibility}
                        airConditioner={airConditioner}
                        secured={secured}
                        fastFood={fastFood}
                        parking={parking}
                        aidKit={aidKit}
                        publicTransport={publicTransport}
                        handleChange={this.handleChange}
                        onFilter={this.onFilter} />
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterBy: state.stayModule.filterBy
    }
}

const mapDispatchToProps = {
    setFilter,
    getStays
}

export const StayFilter = connect(mapStateToProps, mapDispatchToProps)(_StayFilter)