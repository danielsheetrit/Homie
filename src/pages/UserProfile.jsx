import { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { getUsers } from '../store/actions/user.actions'
import { getOrders, updateOrder } from '../store/actions/order.actions'
import { AddStay } from '../cmps/AddStay.jsx'
import { UserStays } from '../cmps/UserStays.jsx'
import { HostHomes } from '../cmps/HostHomes.jsx'
import { Wishlist } from '../cmps/Wishlist.jsx'
import { HostOrders } from '../cmps/HostOrders.jsx'
import { DashboardHeader } from '../cmps/DashboardHeader.jsx'

class _UserProfile extends Component {

    componentDidMount() {
        const { _id } = this.props.loggedInUser
        this.props.getOrders(_id, 'user')
    }

    render() {
        const { loggedInUser, orders, stays, updateOrder } = this.props
        const { isHost } = loggedInUser
        let hostOrders = orders.filter(order => {
            return order.host._id === loggedInUser._id
        })
        hostOrders = hostOrders.sort((order1, order2) => {
            return order2.createdAt - order1.createdAt
        })
        let HostStays = stays.filter(stay => {
            return stay.host._id === loggedInUser._id
        })
        HostStays = HostStays.sort((stay1, stay2) => {
            return stay2.createdAt - stay1.createdAt
        })

        return (
            <section className="user-profile">
                <aside>
                    {isHost && <NavLink activeClassName="user-aside-active" to="/userprofile/orders">Orders</NavLink>}
                    {isHost && <NavLink activeClassName="user-aside-active" to="/userprofile/myhomes">My Homes</NavLink>}
                    {isHost && <NavLink activeClassName="user-aside-active" to="/userprofile/add">Add stay</NavLink>}
                    <NavLink activeClassName="user-aside-active" to="/userprofile/mystays">My Stays</NavLink>
                    <NavLink activeClassName="user-aside-active" to="/userprofile/wishlist">Wishlist</NavLink>
                </aside>
                <main>
                    {/* <h1>Welcome, {loggedInUser.username}</h1> */}
                    <DashboardHeader stays={HostStays} orders={hostOrders} />
                    <Switch>
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
        orders: state.orderModule.orders,
        stays: state.stayModule.stays
    }
}

const mapDispatchToProps = {
    getStays,
    getUsers,
    getOrders,
    updateOrder
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)