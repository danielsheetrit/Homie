import { Component } from 'react'
import { connect } from 'react-redux'
import { stayService } from '../services/stay-service'
import { onSaveStay } from '../store/actions/stay.actions'
import { withSnackbar } from 'notistack'

class _SaveStay extends Component {
    state = {
        name: '',
        price: '',
        type: '',
        capacity: '',
        summary: '',
        amenities: {
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
        },
        houseRules: {
            isPets: false,
            isSmoking: false
        },
        host: {
            _id: this.props.loggedInUser._id,
            fullname: this.props.loggedInUser.fullname,
            imgUrl: this.props.loggedInUser.imgUrl,
        },
        imgUrls: ['https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun2_xggiul.jpg',
            'https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun2_xggiul.jpg',
            'https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun2_xggiul.jpg',
            'https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun2_xggiul.jpg',
            'https://res.cloudinary.com/ariecloud/image/upload/v1606479347/users/london-stun2_xggiul.jpg'],
        loc: {
            country: '',
            city: '',
            countryCode: '',
            address: '',
            lat: 0,
            lng: 0,
        },
        reviews: [],
    }
    // async componentDidMount() {
    //     await this.loadStay()
    // }

    // async loadStay() {
    //     const { id } = this.props.match.params
    //     const stay = await stayService.getById(id)
    //     this.setState({ ...stay })
    // }

    onSaveStay = (ev) => {
        ev.preventDefault()
        const stay = { ...this.state }
        stayService.save(stay)
        this.props.enqueueSnackbar('Home Saved.', {
            variant: 'success',
        })
        setTimeout(() => this.props.closeSnackbar(), 3000)
        this.props.history.push('/userprofile/myhomes')
    }

    handleChange = ({ target }) => {
        let { name, value, id, checked } = target
        value = name === 'price' || name === 'capacity' ? +value : value;
        if (name === 'city') {
            this.setState({ ...this.state, loc: { ...this.state.loc, [name]: value } }, () => {
                this.setLocation(value)
            })
        } else if (name === 'address') {
            this.setState({ ...this.state, loc: { ...this.state.loc, [name]: value } })
        } else if (name === 'house-rules') {
            this.setState({
                ...this.state,
                houseRules: {
                    ...this.state.houseRules,
                    [id]: checked
                }
            })
        } else if (name === 'amenities') {
            this.setState({
                ...this.state,
                amenities: {
                    ...this.state.amenities,
                    [id]: checked
                }

            })
        } else {
            this.setState({ ...this.state, [name]: value })
        }
    }

    setLocation = (city) => {
        let country, countryCode, lat, lng;
        switch (city) {
            case 'Amsterdam':
                country = 'Netherlands'
                countryCode = 'NL'
                lat = 52.370216
                lng = 4.895168
                break
            case 'Paris':
                country = 'France'
                countryCode = 'FR'
                lat = 48.856614
                lng = 2.352222
                break
            case 'New York':
                country = 'New York'
                countryCode = 'US-NY'
                lat = 40.7128
                lng = 74.0060
                break
            case 'Tokyo':
                country = 'Japan'
                countryCode = 'JP'
                lat = 35.6804
                lng = 139.7690
                break
            case 'London':
                country = 'UK'
                countryCode = 'UK'
                lat = 51.5074
                lng = 0.1278
                break
            case 'Barcelona':
                country = 'Spain'
                countryCode = 'ES'
                lat = 41.3851
                lng = 2.1734
                break
            default:
                country = ''
                countryCode = ''
                lat = 0
                lng = 0
        }
        this.setState({ ...this.state, loc: { ...this.state.loc, country, countryCode, lat, lng } })
    }

    render() {
        const { name, price, type, capacity, summary, amenities, houseRules, imgUrls, loc, reviews } = this.state

        // if (!stay) return <h1>Loading</h1>
        return (
            <>
                {<section className="save-stay">
                    <form onSubmit={this.onSaveStay}>
                        <label htmlFor="name">Name </label>
                        {<input type="text" name="name" id="name"
                            autoComplete="null" required onChange={this.handleChange} value={name} />}

                        <label htmlFor="price" >Price </label>
                        <input type="number" name="price" id="price" autoComplete="null" required onChange={this.handleChange} value={price} />

                        <label htmlFor="stay-type">Home type </label>
                        <select name="type" required onChange={this.handleChange} value={type}>
                            <option defaultValue="selected" value="" hidden>Please select a home type</option>
                            <option value="Studio">Studio</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Entire Home">Entire home</option>
                            <option value="Shared Apartment">Shared Apartment</option>
                        </select>

                        <label htmlFor="city">City </label>
                        <select name="city" required onChange={this.handleChange} value={loc.city}>
                            <option defaultValue="selected" value="" hidden>Please select a city</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Paris">Paris</option>
                            <option value="New York">New-York</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="London">London</option>
                            <option value="Barcelona">Barcelona</option>
                        </select>

                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" required autoComplete="null" onChange={this.handleChange} value={loc.address} />

                        <label htmlFor="capacity">Capacity</label>
                        <input type="number" id="capacity" min="1" max="15" name="capacity" autoComplete="null" required onChange={this.handleChange} value={capacity} />

                        <p>Home Rules</p>
                        <div className="checkbox-container flex">

                            <label htmlFor="isPets">
                                <input type="checkbox" name="house-rules" id="isPets" value={houseRules.isPets} checked={houseRules.isPets} onChange={this.handleChange} />
                                Allow Pets</label>

                            <label htmlFor="isSmoking">
                                <input type="checkbox" name="house-rules" id="isSmoking" value={houseRules.isSmoking} checked={houseRules.isSmoking} onChange={this.handleChange} />
                                Allow Smoking</label>
                        </div>

                        <p>Amenities</p>
                        <div className="checkbox-container flex">
                            <label htmlFor="tv">
                                <input type="checkbox" name="amenities" id="tv" value={amenities.tv} checked={amenities.tv} onChange={this.handleChange} />
                                TV</label>
                            <label htmlFor="wifi">
                                <input type="checkbox" name="amenities" id="wifi" value={amenities.wifi} checked={amenities.wifi} onChange={this.handleChange} />
                                Wi-fi</label>
                            <label htmlFor="kitchen">
                                <input type="checkbox" name="amenities" id="kitchen" value={amenities.kitchen} checked={amenities.kitchen} onChange={this.handleChange} />
                                Kitchen</label>
                            <label htmlFor="accessibility">
                                <input type="checkbox" name="amenities" id="accessibility" value={amenities.accessibility} checked={amenities.accessibility} onChange={this.handleChange} />
                                Accessibility</label>
                            <label htmlFor="air-conditioner">
                                <input type="checkbox" name="amenities" id="airConditioner" value={amenities.airConditioner} checked={amenities.airConditioner} onChange={this.handleChange} />
                                Air conditioner</label>
                            <label htmlFor="secured">
                                <input type="checkbox" name="amenities" id="secured" value={amenities.secured} checked={amenities.secured} onChange={this.handleChange} />
                                Secured</label>
                            <label htmlFor="fast-food">
                                <input type="checkbox" name="amenities" id="fastFood" value={amenities.fastFood} checked={amenities.fastFood} onChange={this.handleChange} />
                                Fast food</label>
                            <label htmlFor="parking">
                                <input type="checkbox" name="amenities" id="parking" value={amenities.parking} checked={amenities.parking} onChange={this.handleChange} />
                                Parking</label>
                            <label htmlFor="aid-kit">
                                <input type="checkbox" name="amenities" id="aidKit" value={amenities.aidKit} checked={amenities.aidKit} onChange={this.handleChange} />
                                Aid kit</label>
                            <label htmlFor="public-transport">
                                <input type="checkbox" name="amenities" id="publicTransport" value={amenities.publicTransport} checked={amenities.publicTransport} onChange={this.handleChange} />
                                Public transport</label>
                        </div>

                        <label htmlFor="summary">Summary</label>
                        <textarea name="summary" id="summary" cols="10" rows="10" required onChange={this.handleChange} value={summary}></textarea>

                        <div className="flex">
                            <button type="submit" className="save-stay-btn">Save</button>
                        </div>
                    </form>
                </section>
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays,
        loggedInUser: state.userModule.loggedInUser
    };
}

const mapDispatchToProps = {
    onSaveStay
}

export const SaveStay = connect(mapStateToProps, mapDispatchToProps)(withSnackbar(_SaveStay))