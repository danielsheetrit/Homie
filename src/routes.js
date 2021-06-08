import { Home } from './pages/Home.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { StayApp } from './pages/StayApp.jsx'
import { StayDetails } from './pages/StayDetails.jsx'
import { UserProfile } from './pages/UserProfile.jsx'
import { StayTrips } from './pages/StayTrips.jsx'

export const routes = [
    {
        path: '/stay/:id',
        component: StayDetails,
    },
    {
        path: '/stay',
        component: StayApp,
    },
    {
        path: '/login',
        component: LoginSignup,
    },
    {
        path: '/signup',
        component: LoginSignup,
    },
    {
        path: '/userprofile',
        component: UserProfile,
    },
    {
        path: '/trips',
        component: StayTrips,
    },
    {
        path: '/',
        component: Home,
    },
]