import { Component } from 'react'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions'
import { getUsers } from '../store/actions/user.actions'

class _UserProfile extends Component {
    render() {
        const {loggedInUser}=this.props
        return (

            <section className="user-profile">
                <h2>{`hello ${loggedInUser.username}`}</h2>
                <aside>

                </aside>
            </section>

        )
    }
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    getStays,
    getUsers

}

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile)