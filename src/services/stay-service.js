import { httpService } from './http-service'

export const stayService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy) {
    return await httpService.get('stay/', filterBy)
}

async function getById(id) {
    return await httpService.get(`stay/${id}`)
}

async function save(stay) {
    if (stay._id) {
        return await httpService.put(`stay/${stay._id}`, stay)
    } else {
        return await httpService.post('stay/', stay)
    }
}

async function remove(id) {
    return await httpService.delete(`stay/${id}`)
}