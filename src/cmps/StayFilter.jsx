// import { EventAvailableRounded } from '@material-ui/icons';
import React, { Component } from 'react'
import { Checkbox } from '@material-ui/core';
import { RangeSlider } from './RangeSlider.jsx';
import { connect } from 'react-redux'
import { getFilter, getStays } from '../store/actions/stay.actions'


class _StayFilter extends Component {
    state = {
        node: React.createRef(),
        currentBtnId: null,
        filterBy: {

        },
        data: [{ id: 0, name: "Price" }, { id: 1, name: "Type of place" }, { id: 2, name: "Amenities", }, { id: 3, name: "Stay Rules" }]
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.closeModal);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.closeModal);
    }

    toggleModal = (id) => {
        const currentBtnId = id !== this.state.currentBtnId ? id : null
        this.setState({ currentBtnId })
    }

    onFilter = (ev, id) => {
        ev.preventDefault()
        const filterBy = this.props.filterBy
        this.props.getStays(filterBy)
        this.toggleModal(id)
    }

    getFilterHeader = () => {
        if (!this.props.filterBy.loc) return 'Our Stays'
        const city = this.props.filterBy.loc.city
        return `Stays in ${city}`
    }

    closeModal = (ev) => {
        if (!this.node.contains(ev.target) || this.node === ev.target) {
            this.setState({ currentBtnId: null })
        }
    }

    handleChange = ({ target }) => {
        let { name, value, type } = target
        // console.log('type', type, 'name', name, 'value')
        value = type === 'number' ? +value : value
        const { filterBy } = this.state
        const filterTypes = this.state.filterBy
        if (type === 'checkbox' && !filterTypes.name) {
            this.setState({ filterBy: { ...filterBy, name } }, () => {
                this.props.getFilter(filterBy)
                console.log('this.props.filterBy', this.props.filterBy)
            })
        } else {
            this.setState({ filterBy: { ...filterBy, [name]: value } }, () => {
                // this.props.onSetFilter(filterBy)
                this.props.getFilter(filterBy)
            })
        }
    }

    render() {
        const filterHeader = this.getFilterHeader();
        const { minPrice, maxPrice } = this.state
        return (
            <section className="stay-filter-2">
                <h2 className="filter-header">{filterHeader}</h2>
                <div className="btn-group flex" ref={node => this.node = node}>
                    {this.state.data.map((btn, idx) => {
                        return (
                            <>
                                <div key={idx} className="btn-container">
                                    <button className="btn" btnId={btn.id} onClick={() => this.toggleModal(btn.id)}>
                                        {btn.name}
                                    </button>
                                    {
                                        this.state.currentBtnId === btn.id ? (
                                            <Modal minPrice={minPrice} maxPrice={maxPrice} name={btn.name} id={btn.id} toggleModal={this.toggleModal} handleChange={this.handleChange} onFilter={this.onFilter} />
                                        ) : null}
                                </div>
                            </>
                        );
                    })}
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
    getFilter,
    getStays
}

export const StayFilter = connect(mapStateToProps, mapDispatchToProps)(_StayFilter)




const Modal = ({ name, id, toggleModal, closeModal, handleChange, minPrice, maxPrice, onFilter }) => (
    <>
        <div onClick={(ev) => { closeModal(ev) }}></div>
        <div className="filter-modal flex column" onClick={(ev) => { ev.stopPropagation() }}>
            {name === 'Price' && <PriceFilter handleChange={handleChange} onFilter={onFilter} minPrice={minPrice} maxPrice={maxPrice} />}
            {name === 'Type of place' && <TypeFilter handleChange={handleChange} onFilter={onFilter} />}
            {name === 'Amenities' && <AmenitiesFilter handleChange={handleChange} onFilter={onFilter} />}
            {name === 'Stay Rules' && <RulesFilter handleChange={handleChange} onFilter={onFilter} />}
            <div className="btn-container">
                <button onClick={() => { toggleModal(id) }}>Clear</button>
                {/* <button onClick={() => { toggleModal(id) }}>Save</button> */}
                <button onClick={(ev) => { onFilter(ev, id) }}>Save</button>
            </div>
        </div>
    </>
)

const PriceFilter = ({ handleChange, minPrice, maxPrice, onFilter }) => {
    return (
        <>
            <RangeSlider minPrice={minPrice} maxPrice={maxPrice} />
            <div className="price-filter-container flex">
                <div className="input-container">
                    <input type="number" name="minPrice" value={minPrice} placeholder="min price" onChange={handleChange} />
                </div>
                <div className="input-container">
                    <input type="number" name="maxPrice" id="" value={maxPrice} placeholder="max price" onChange={handleChange} />
                </div>
            </div>
        </>
    )

}
const TypeFilter = ({ handleChange }) => {
    const types = ['apartment', 'entire-home', 'studio', 'shared-apartment']
    const labelValues = ['Apartment', 'Entire home', 'Studio', 'Shared apartment']

    return (
        <form className="flex column">
            {types.map((type, idx) => {

                return <label key={idx} htmlFor={type}><Checkbox
                    // color="secondary"
                    color="default"
                    name={type}
                    id={type}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />{labelValues[idx]}</label>
            })}
        </form>
    )
}
const AmenitiesFilter = ({ handleChange }) => {
    const amenities = [
        'tv',
        'wifi',
        'kitchen',
        'accessibility',
        'airConditioner',
        'secured',
        "fastFood",
        "parking",
        "aidKit",
        "publicTransport",
    ]
    const labelValues = [
        'Tv',
        'Wifi',
        'Kitchen',
        'Accessibility',
        'Air conditioner',
        'Secured',
        "Fast food",
        "Parking",
        "Aid Kit",
        "Public transport",
    ]
    const firstAmenitiesDiv = amenities.slice(0, 5)
    const secondAmenitiesDiv = amenities.slice(5, 10)
    return (
        <form className="flex">
            <div className="flex column">
                {firstAmenitiesDiv.map((type, idx) => {
                    return <label key={idx} htmlFor={type}><Checkbox
                        color="default"
                        id={type}
                        name={type}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />{labelValues[idx]}</label>
                })}
            </div>
            <div className="flex column">
                {secondAmenitiesDiv.map((type, idx) => {
                    return <label key={idx} htmlFor={type}><Checkbox
                        color="default"
                        id={type}
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />{labelValues[idx + 5]}</label>
                })}
            </div>
        </form>
    )
}
const RulesFilter = ({ handleChange }) => {
    const rules = ['allow-pets', 'allow-smoking']
    const labelValues = ['Allow pets', 'Allow smoking']
    return (
        <form className="flex column">
            {rules.map((type, idx) => {

                return <label key={idx} htmlFor={type}><Checkbox
                    color="default"
                    id={type}
                    name={type}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />{labelValues[idx]}</label>
            })}
        </form>
    )
}