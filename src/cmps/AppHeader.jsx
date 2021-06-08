import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { StaySearch } from './StaySearch'
import { connect } from 'react-redux'
import { onLogout } from '../store/actions/user.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AvatarSymbol } from './AvatarSymbol'
import Badge from '@material-ui/core/Badge'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

class _AppHeader extends Component {

    state = {
        node: React.createRef(),
        isOpen: false,
    }

    onShowUserMenu = () => {
        this.setState({ isOpen: true })
    }
    
    onCloseUserMenu = () =>{
        this.setState({ isOpen: false })
    }


    render() {
        const { loggedInUser, onLogout } = this.props
        return (
            <header className="flex" ref={this.state.node}>
                <nav className="nav-header flex align-center">
                    <NavLink to="/">
                        <h1 className="logo">
                            <FontAwesomeIcon icon={faCampground} size="2x" />
                            Homie
                        </h1>
                    </NavLink>
                    <StaySearch node={this.state.node} />
                    <ul className="nav-link clean-list flex align-center">
                        <li><NavLink to="/">Become a host</NavLink></li>
                        <li><NavLink to="/stay">Explore</NavLink></li>
                        <ClickAwayListener onClickAway={this.onCloseUserMenu}>
                            <li className="flex align-center">
                                <div className="login-signup-btn flex align-center"
                                    onClick={this.onShowUserMenu}
                                >
                                    <FontAwesomeIcon icon={faBars} size="2x" />
                                    {!loggedInUser && <FontAwesomeIcon icon={faUserCircle} size="2x" />}
                                    {loggedInUser &&
                                        <div className="avatar-container">
                                            <Badge badgeContent={4} color="secondary">
                                                <AvatarSymbol url={loggedInUser.imgUrl} />
                                            </Badge>
                                        </div>
                                    }
                                </div>
                            </li>
                        </ClickAwayListener>
                    </ul>
                    {this.state.isOpen &&
                        <div className="user-modal flex">
                            <ul className="clean-list">
                                {!loggedInUser && <li><NavLink to="/login">Login</NavLink></li>}
                                {loggedInUser && loggedInUser.isHost && <li><NavLink to="/userprofile/orders">Profile</NavLink></li>}
                                {loggedInUser && <li><NavLink to="/trips">Trips</NavLink></li>}
                                <li>
                                    {loggedInUser && <NavLink onClick={onLogout} to="/">Logout</NavLink>}
                                    {!loggedInUser && <NavLink to="/signup">Signup</NavLink>}
                                </li>
                            </ul>
                        </div>}
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.userModule.loggedInUser
    }
}

const mapDispatchToProps = {
    onLogout,
}

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader)