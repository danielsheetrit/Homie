import { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { getUsers } from '../store/actions/user.actions'
import { getOrders } from '../store/actions/order.actions'
import { AddStay } from '../cmps/AddStay.jsx'
import { UserStays } from '../cmps/UserStays.jsx'
import { StayOrders } from '../cmps/StayOrders.jsx'
import { Wishlist } from '../cmps/Wishlist.jsx'

class _UserProfile extends Component {
    componentDidMount() {
        const { _id } = this.props.loggedInUser
        this.props.getOrders(_id)
    }
    render() {
        const { loggedInUser, orders } = this.props
        return (

            <section className="user-profile">
                {/* <h2>{`hello ${loggedInUser.username}`}</h2> */}
                <aside>
                    <NavLink to="/userprofile/add">Add stay</NavLink>
                    <NavLink to="/userprofile/mystays">Stays</NavLink>
                    <NavLink to="/userprofile/orders">Orders</NavLink>
                    <NavLink to="/userprofile/wishlist">Wishlist</NavLink>
                </aside>
                <main>
                    <Switch>
                        <Route path="/userprofile/add" component={AddStay} />
                        <Route path="/userprofile/mystays" component={UserStays} />
                        {/* <Route path="/userprofile/orders" component={StayOrders} /> */}
                        <Route path="/userprofile/orders" render={(props) => <StayOrders {...props} loggedInUser={loggedInUser} orders={orders} />} />

                        <Route path="/userprofile/wishlist" component={Wishlist} />
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
    getOrders
}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)