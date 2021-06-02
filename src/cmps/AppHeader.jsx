import { NavLink } from 'react-router-dom'
import { StaySearch } from './StaySearch'
import React, { Component } from 'react'

export class AppHeader extends Component {

    state = {
        node: React.createRef(),
    }

    render() {
        return (
            <header className="flex" ref={this.state.node}>
                <nav className="nav-header">
                    <NavLink to="/"><h1 className="logo">Homie.</h1></NavLink>
                    <StaySearch node={this.state.node} />
                    <ul className="nav-link clean-list flex">
                        <li ><NavLink to="/login">login</NavLink></li>
                        <li ><NavLink to="/signup">signup</NavLink></li>
                        <li ><NavLink to="/stay">Explore</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}