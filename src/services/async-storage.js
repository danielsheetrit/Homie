import { utilService } from './util-service.js'
export const asyncStorage = {
    query,
    getOne,
    post,
    put,
    remove,
    _save
}

async function query(entityType, filterBy = {
    price: "", amenities: "",
    guest: 0, city: null, startDate: '', endDate: '', minPrice: -Infinity, maxPrice: Infinity
}) {
    console.log('SERVICE', filterBy)
    const { price, amenities, guest, city, startDate, endDate, minPrice, maxPrice } = filterBy
    try {
        const entities = await JSON.parse(localStorage.getItem(entityType)) || []
        const filterd = entities.filter(entity => {
            return entity.loc.city.includes(city) && entity.capacity >= guest && entity.price > minPrice && entity.price < maxPrice
        })
        const newFilterdEnti = !filterd.length ? entities : filterd
        return newFilterdEnti
    } catch (err) {
        console.log('failed to load', err)
    }
}

async function getOne(entityType, entityId) {
    try {
        const entities = await query(entityType)
        return entities.find(entity => entity._id === entityId)
    } catch (err) {
        console.log('no match', err)
    }
}

async function post(entityType, newEntity) {
    try {
        const entities = await query(entityType)
        newEntity._id = utilService.makeId()
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    } catch (err) {
        console.log('cant add...', err)
    }
}

async function put(entityType, updatedEntity) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    } catch (err) {
        console.log('cant edit...', err)
    }
}

async function remove(entityType, entityId) {
    try {
        const entities = await query(entityType)
        const idx = entities.findIndex(entity => entity._id === entityId)
        entities.splice(idx, 1)
        _save(entityType, entities)
    } catch (err) {
        console.log('cant delete...', err)
    }
}


function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))

}