import { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { cloudinaryService } from '../services/cloudinary-service'
import { getUsers, onLogout, onSignup, onLogin } from '../store/actions/user.actions'


class _LoginSignup extends Component {
    state = {
        isSignup: '',
        isOpen: false,
        userInfo: {
            fullname: '',
            username: '',
            password: '',
            imgUrl: ''
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

    componentWillUnmount() {
        document.body.classList.remove('header-home-mode-open')
        document.body.classList.remove('header-onclick-mode')
    }

    handleClickToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleChange = async (ev) => {
        const {target} = ev
        const field = target.name
        const value = target.value
        const { isSignup, credentials, userInfo } = this.state

        if (isSignup === 'login') {
            this.setState({ credentials: { ...credentials, [field]: value } })
        } else {
            this.setState({ userInfo: { ...userInfo, [field]: value } })
            if(target.type === 'file'){
                const pic = await cloudinaryService.uploadImg(ev)
                console.log('PIC',pic)
                this.setState({userInfo:{...userInfo, imgUrl: pic.url }})
            }
        }
    }

    onSubmitUser = async ev => {
        ev.preventDefault()
        const { isSignup, userInfo, credentials } = this.state
        const { onSignup, onLogin } = this.props
<<<<<<< HEAD
        console.log('AAA', userInfo)
        isSignup === 'login' ? onLogin(credentials) : onSignup(userInfo)
        this.props.history.push('/')
=======
        console.log('INFO', userInfo)
        isSignup === 'login' ? onLogin(credentials) : onSignup(userInfo)
        this.props.history.push('/')
    }

    onUpload = async ev => {
        const pic = await cloudinaryService.uploadImg(ev)
        this.setState({ imgUrl: pic.url })
>>>>>>> 47d9ac018f7595838f103b8bfada98fe332d9ed9
    }
    
    // onUpload = async ev => {
    //     const {userInfo}=this.state
    //     
    // }

    render() {
        const { isSignup } = this.state
        
        console.log('DDD',this.state)
        return (
            <div className="log-page-container flex align-center justify-center full">
                <div className="form-filter"></div>
                { isSignup === 'signup' &&
                    <section className="sign-up flex">
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                        <form className="flex" onSubmit={this.onSubmitUser}>
                            <label htmlFor="fullname">Fullname</label>
                            <input onChange={this.handleChange} type="text" name="fullname" id="fullname" />
                            <label htmlFor="username">Username</label>
                            <input onChange={this.handleChange} type="text" name="username" id="username" />
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} type="password" name="password" id="password" />
                            <div className="btn-container flex ">
                                <div className="btn-upload">
                                    <label name="img-upload" htmlFor="upload">
                                        upload your image
                                    </label>
                                    <input id="upload" type="file" onChange={this.handleChange} />
                                </div>
                                <button className="btn">Submit</button>
                            </div>
                        </form>
                    </section>
                }
                { isSignup === 'login' &&
                    <section className="log-in flex">
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                        <form onSubmit={this.onSubmitUser} className="flex">
                            <label htmlFor="username">Username</label>
                            <input onChange={this.handleChange} type="text" name="username" id="username" />
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} type="password" name="password" id="password" />
                            <button className="btn">Submit</button>
                        </form>
                    </section>
                }
            </div>
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