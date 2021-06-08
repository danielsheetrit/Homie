import { Component } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../store/actions/order.actions'
import { getStays } from '../store/actions/stay.actions'
import { UserOrderPreview } from '../cmps/UserOrderPreview.jsx'
import trip from '../assets/img/trip.png'

export class _StayTrips extends Component {

    componentDidMount() {
        const { _id } = this.props.loggedInUser
        this.props.getOrders(_id, 'user')
        this.props.getStays()
    }
    getUserOrders = () => {
        const { orders } = this.props
        const { loggedInUser } = this.props
        const userOrders = orders.filter(order => {
            return order.buyer._id === loggedInUser._id
        }).sort((order1, order2) => {
            return order2.createdAt - order1.createdAt
        })
        return userOrders
    }

    render() {
        const userOrders = this.getUserOrders()
        // TODO: put loader
        if (!userOrders) return <h1>Loading</h1>
        return (
            <section className="stay-trips">
                <h1>Trips</h1>
                <div className="preview-container">
                    {userOrders.map(order => {
                        return <UserOrderPreview order={order} key={order._id} />
                    })}
                </div>
                <div><img src={trip} alt="order" /></div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.userModule.loggedInUser,
        orders: state.orderModule.orders,
        stays: state.stayModule.stays
    }
}

const mapDispatchToProps = {
    getOrders,
    getStays
}

export const StayTrips = connect(mapStateToProps, mapDispatchToProps)(_StayTrips)