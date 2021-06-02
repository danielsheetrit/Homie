import { NavLink } from 'react-router-dom'
import { StaySearch } from './StaySearch'

export function AppHeader() {

    return (
        <header className="flex">
            <nav className="nav-header">
                <NavLink to="/"><h1 className="logo">Homie</h1></NavLink>
                <StaySearch />
                <ul className="nav-link clean-list flex">
                    <li ><NavLink to="/login">login</NavLink></li>
                    <li ><NavLink to="/signup">signup</NavLink></li>
                    <li ><NavLink to="/stay">Explore</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}