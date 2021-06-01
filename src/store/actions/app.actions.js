export function setSearchMode(searchMode) {
    console.log(searchMode);
    return dispach => {
        dispach({ type: 'SET_SEARCHMODE', searchMode })
    }
}