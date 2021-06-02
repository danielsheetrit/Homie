import { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers, onLogout, onSignup, onLogin } from '../store/actions/user.actions'

class _LoginSignup extends Component {
    state = {
        isSignup: '',
        userInfo: {
            fullname: '',
            username: '',
            password: ''
        },
        credentials: {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        const isSignup = this.props.match.path === '/login' ? 'login' : 'signup'
        this.setState({ isSignup })
        this.props.getUsers()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        const { isSignup, credentials, userInfo } = this.state
        if (isSignup === 'login') {
            this.setState({ credentials: { ...credentials, [field]: value } })
        } else {
            this.setState({ userInfo: { ...userInfo, [field]: value } })
        }
    }

    onSubmitUser = ev => {
        ev.preventDefault()
        const { isSignup, userInfo, credentials } = this.state
        const { onSignup, onLogin } = this.props
        console.log(userInfo)
        isSignup === 'login' ? onLogin(credentials) : onSignup(userInfo)
        this.props.history.push('/') 
    }

    render() {
        const { isSignup } = this.state


        return (
            <>
                { isSignup === 'signup' &&
                    <section className="sign-up flex">
                        <h2>signup</h2>
                        <form className="flex" onSubmit={this.onSubmitUser}>
                            <label htmlFor="username">username</label>
                            <input onChange={this.handleChange} type="text" name="username" id="username" />
                            <label htmlFor="fullname">fullname</label>
                            <input onChange={this.handleChange} type="text" name="fullname" id="fullname" />
                            <label htmlFor="password">password</label>
                            <input onChange={this.handleChange} type="password" name="password" id="password" />
                            <button className="btn">submit</button>
                        </form>
                    </section>
                }
                { isSignup === 'login' &&
                    <section className="log-in flex">
                        <h2>login</h2>
                        <form onSubmit={this.onSubmitUser} className="flex">
                            <label htmlFor="username">username</label>
                            <input onChange={this.handleChange} type="text" name="username" id="username" />
                            <label htmlFor="password">password</label>
                            <input onChange={this.handleChange} type="password" name="password" id="password" />
                            <button className="btn">submit</button>
                        </form>
                    </section>
                }
                {}
            </>
        )
    }
}

function mapStateToProps(state) {
    const { users } = state.userModule
    return {
        users
    }
}

const mapDispatchToProps = {
    getUsers,
    onLogout,
    onSignup,
    onLogin
}

export const LoginSignup = connect(mapStateToProps, mapDispatchToProps)(_LoginSignup)