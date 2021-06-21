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
        msgNum: 0
    }

    onShowUserMenu = () => {
        this.setState({ isOpen: true })
    }

    onCloseUserMenu = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const { loggedInUser, onLogout } = this.props
        const { msgNum } = this.state

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

                        <li className="flex align-center">
                            <div className="login-signup-btn flex align-center"
                                onClick={this.onShowUserMenu}
                            >
                                <FontAwesomeIcon icon={faBars} size="2x" />
                                {!loggedInUser && <FontAwesomeIcon icon={faUserCircle} size="2x" />}
                                {loggedInUser &&
                                    <div className="avatar-container">
                                        <Badge badgeContent={msgNum} color="secondary">
                                            <AvatarSymbol url={loggedInUser.imgUrl} />
                                        </Badge>
                                    </div>
                                }
                            </div>
                        </li>
                    </ul>
                    {this.state.isOpen && <ClickAwayListener onClickAway={this.onCloseUserMenu}>
                        <div className="user-modal flex">
                            <ul className="clean-list">
                                {!loggedInUser &&
                                    <NavLink
                                        onClick={this.onCloseUserMenu}
                                        to="/login"
                                    >
                                        <li>Login</li>
                                    </NavLink>}
                                {loggedInUser && loggedInUser.isHost &&
                                    <NavLink
                                        onClick={this.onCloseUserMenu}
                                        to="/userprofile/orders"
                                    >
                                        <li>Profile</li>
                                    </NavLink>}
                                {loggedInUser && <NavLink
                                    onClick={this.onCloseUserMenu}
                                    to="/trips"
                                >
                                    <li>Trips</li>
                                </NavLink>}
                                <li>
                                    {loggedInUser && <NavLink onClick={onLogout} to="/">Logout</NavLink>}
                                    {!loggedInUser && <NavLink to="/signup">Signup</NavLink>}
                                </li>
                            </ul>
                        </div>
                    </ClickAwayListener>}
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