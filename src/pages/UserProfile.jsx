import { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { getUsers } from '../store/actions/user.actions'
import { getOrders } from '../store/actions/order.actions'
import { AddStay } from '../cmps/AddStay.jsx'
import { UserStays } from '../cmps/UserStays.jsx'
import { HostHomes } from '../cmps/HostHomes.jsx'
import { StayOrders } from '../cmps/StayOrders.jsx'
import { Wishlist } from '../cmps/Wishlist.jsx'
import { HostOrdersPreview } from '../cmps/HostOrdersPreview.jsx'

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
        const { loggedInUser, orders } = this.props
        const { isHost } = loggedInUser
        const hostOrders = orders.filter(order => {
            return order.host._id === loggedInUser._id
        })

        console.log('loggedInUser._id', loggedInUser._id)
        console.log('order.host._id', orders[0])
        return (

            <section className="user-profile">

                <aside>
                    <NavLink to="/userprofile/orders">Orders</NavLink>
                    {isHost && <NavLink to="/userprofile/myhomes">My Homes</NavLink>}
                    {isHost && <NavLink to="/userprofile/add">Add stay</NavLink>}
                    <NavLink to="/userprofile/mystays">My Stays</NavLink>
                    <NavLink to="/userprofile/wishlist">Wishlist</NavLink>
                </aside>
                <main>
                    <Switch>
                        <Route
                            path="/userprofile/orders"
                            render={(props) => <StayOrders
                                {...props}
                                loggedInUser={loggedInUser}
                                orders={orders}
                                getStatusClassName={this.getStatusClassName} />}
                        />
                        <Route path="/userprofile/add" component={AddStay} />
                        <Route path="/userprofile/myhomes" component={HostHomes} />
                        <Route path="/userprofile/mystays" component={UserStays} />
                        <Route path="/userprofile/wishlist" component={Wishlist} />
                    </Switch>
                    {isHost && hostOrders && hostOrders.map(order => {
                        return <HostOrdersPreview order={order} key={order._id} />
                    })}
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