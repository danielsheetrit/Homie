import { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { getUsers } from '../store/actions/user.actions'
import { getOrders, updateOrder } from '../store/actions/order.actions'
import { SaveStay } from '../cmps/SaveStay'
import { UserStays } from '../cmps/UserStays'
import { HostHomes } from '../cmps/HostHomes'
import { Wishlist } from '../cmps/Wishlist'
import { HostOrders } from '../cmps/HostOrders'
import { DashboardHeader } from '../cmps/DashboardHeader'


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
        let hostStays = stays.filter(stay => {
            return stay.host._id === loggedInUser._id
        })
        hostStays = hostStays.sort((stay1, stay2) => {
            return stay2.createdAt - stay1.createdAt
        })
        let hostHomes = stays.filter(stay => stay.host._id === loggedInUser._id)
        hostHomes = hostHomes.sort((stay1, stay2) => {
            const city1 = stay1.loc.city
            const city2 = stay2.loc.city
            if (city1 > city2) return 1
            if (city1 < city2) return -1
            return 0
        })

        return (
            <section className="user-profile">
                <aside>
                    {isHost && <NavLink activeClassName="user-aside-active" to="/userprofile/orders">Orders</NavLink>}
                    {isHost && <NavLink activeClassName="user-aside-active" to="/userprofile/myhomes">My Homes</NavLink>}
                    {isHost && <NavLink activeClassName="user-aside-active" to="/userprofile/save">Add stay</NavLink>}
                    {/* <NavLink activeClassName="user-aside-active" to="/userprofile/mystays">My Stays</NavLink> */}
                    {/* <NavLink activeClassName="user-aside-active" to="/userprofile/wishlist">Wishlist</NavLink> */}
                </aside>
                <main>
                    <DashboardHeader stays={hostStays} orders={hostOrders} />
                    <Switch>
                        <Route exact path="/userprofile/save" component={SaveStay} />
                        <Route exact path="/userprofile/save/:id" component={SaveStay} />
                        <Route exact path="/userprofile/myhomes" render={(props) => <HostHomes {...props} hostHomes={hostHomes} hostOrders={hostOrders} />} />
                        {/* <Route exact path="/userprofile/mystays" component={UserStays} /> */}
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