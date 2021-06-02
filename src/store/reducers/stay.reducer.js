const initialState = {
    stays: [],
    currentPage: '',
    isSearchMode: true
}

export function stayReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_STAYS':
            return { ...state, stays: action.stays }
        case 'ADD_STAY':
            return { ...state, stays: [action.stay, ...state.stays] }
        case 'UPDATE_STAY':
            return { ...state, stays: [action.stay, ...state.stays.filter(stay => action.stay._id !== stay._id)] }
        case 'REMOVE_STAY':
            return { ...state, stays: state.stays.filter(stay => stay._id !== action.stayId) }
        case 'SET_CURRENTPAGE':
            return {...state, currentPage: action.page }
        case 'SET_ISSEARCHMODE':
            return {...state, isSearchMode: action.isSearchMode }
        default:
            return state
    }
}