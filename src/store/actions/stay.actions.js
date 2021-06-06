import { stayService } from '../../services/stay-service'

export function getStays(filterBy = { price: '', amenities: '' }) {
    return async dispatch => {
        try {
            // console.log('getStays in front', getStays)
            const stays = await stayService.query(filterBy)
            dispatch({ type: 'SET_STAYS', stays })

        } catch (err) {
            console.log('StaysActions: err in getStays', err)
        }
    }
}

export function onSaveStay(stay) {
    return async dispatch => {
        try {
            const savedStay = await stayService.save(stay)
            console.log('STAY IN ACTION', savedStay)
            dispatch({ type: stay._id ? 'UPDATE_STAY' : 'ADD_STAY', stay: savedStay })
        } catch (err) {
            console.log(`StaysActions: err in ${stay._id ? 'update stay' : 'add stay'}${err}`)
        }
    }
}

export function onRemoveStay(stayId) {
    return async dispatch => {
        try {
            await stayService.remove(stayId)
            dispatch({ type: 'REMOVE_STAY', stayId })
        } catch (err) {
            console.log('StaysActions: err in removeStay', err)
        }
    }
}

export function setFilter(filterBy) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_FILTER', filterBy })
        } catch (err) {
            console.log('StaysActions: err in getFilter', err)
        }
    }
}