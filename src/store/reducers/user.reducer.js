let localLoggedinUser = {
    _id: "60bf2d7dc508494d34eaae90",
    username: "Alex",
    fullname: "Alex",
    imgUrl: "https://ozgrozer.github.io/100k-faces/0/7/007489.jpg",
    isHost: true
}

if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    loggedInUser: localLoggedinUser,
    users: []
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, loggedInUser: action.user }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
        case 'SET_USERS':
            return { ...state, users: action.users }
        default:
            return state
    }
}