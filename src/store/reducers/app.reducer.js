const initialState = {
    isSearchMode: false
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SEARCHMODE':
            return {...state, isSearchMode: action.searchMode }
        default:
            return state
    }
}
