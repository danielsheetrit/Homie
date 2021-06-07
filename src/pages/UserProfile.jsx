import { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { getUsers } from '../store/actions/user.actions'
import { getOrders, updateOrder } from '../store/actions/order.actions'
import { AddStay } from '../cmps/AddStay.jsx'
import { UserStays } from '../cmps/UserStays.jsx'
import { HostHomes } from '../cmps/HostHomes.jsx'
import { StayTrips } from '../cmps/StayTrips.jsx'
import { Wishlist } from '../cmps/Wishlist.jsx'
import { HostOrders } from '../cmps/HostOrders.jsx'

class _UserProfile extends Component {

    componentDidMount() {
        const { _id } = this.props.loggedInUser
        // console.log('this.props.loggedInUser', this.props.loggedInUser)
        this.props.getOrders(_id, 'user')
    }

    getStatusClassName = (status) => {
        let classColor;

        if (status === 'approved') {
            classColor = 'approved'
        } else if (status === 'pending') {
            classColor = 'pending'
        } else {
            classColor = 'rejected'
        }

        return classColor
    }

    render() {
        const { loggedInUser, orders, updateOrder } = this.props
        const { isHost } = loggedInUser
        let hostOrders = orders.filter(order => {
            return order.host._id === loggedInUser._id
        })
        hostOrders = hostOrders.sort((order1, order2) => {
            return order2.createdAt - order1.createdAt
        })

        return (

            <section className="user-profile">
                {/* {console.log('orders', orders)} */}
                <aside>
                    <NavLink to="/userprofile/trips">Trips</NavLink>
                    {isHost && <NavLink to="/userprofile/orders">Orders</NavLink>}
                    {isHost && <NavLink to="/userprofile/myhomes">My Homes</NavLink>}
                    {isHost && <NavLink to="/userprofile/add">Add stay</NavLink>}
                    <NavLink to="/userprofile/mystays">My Stays</NavLink>
                    <NavLink to="/userprofile/wishlist">Wishlist</NavLink>
                </aside>
                <main>
                    <h1>Welcome, {loggedInUser.username}</h1>
                    <Switch>
                        <Route exact
                            path="/userprofile/trips"
                            render={(props) => <StayTrips
                                {...props}
                                loggedInUser={loggedInUser}
                                orders={orders}
                                getStatusClassName={this.getStatusClassName} />}
                        />
                        <Route exact path="/userprofile/add" component={AddStay} />
                        <Route exact path="/userprofile/myhomes" component={HostHomes} />
                        <Route exact path="/userprofile/mystays" component={UserStays} />
                        <Route exact path="/userprofile/wishlist" component={Wishlist} />
                        <Route exact path="/userprofile/orders" render={(props) => <HostOrders  {...props} hostOrders={hostOrders} updateOrder={updateOrder} />} />
                    </Switch>

                </main>
            </section>

        )
    }
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.userModule.loggedInUser,
        orders: state.orderModule.orders
    }
}

const mapDispatchToProps = {
    getStays,
    getUsers,
    getOrders,
    updateOrder
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)