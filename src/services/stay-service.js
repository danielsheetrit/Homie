// import { asyncStorage } from './async-storage'
import { httpService } from './http-service'
// import { asyncStorage } from './async-storage'

export const stayService = {
    query,
    getById,
    save,
    remove,
}



// asyncStorage._save(KEY, gStays)

async function query(filterBy) {
    return await httpService.get('stay/', filterBy)
    // const res = await asyncStorage.query(KEY, filterBy)
    // return res
}

async function getById(id) {
    return await httpService.get(`stay/${id}`)
    // return await asyncStorage.getOne(KEY, id)
}

async function save(stay) {
    if (stay._id) {
        return await httpService.put(`stay/${stay._id}`, stay)
        // return await asyncStorage.put(KEY, toy)
    } else {
        return await httpService.post('stay/', stay)
        // return await asyncStorage.post(KEY, toy)
    }
}

async function remove(id) {
    return await httpService.delete(`stay/${id}`)
    // return await asyncStorage.remove(KEY, stayId)
}
