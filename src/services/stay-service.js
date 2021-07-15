import { httpService } from './http-service'
import { utilService } from './util-service'
export const stayService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy) {
    try {
        return await httpService.get('stay/', filterBy)
    } catch (err) {
        console.log('cant get stays', err)
    }
}

async function getById(id) {
    try {
        return await httpService.get(`stay/${id}`)
    } catch (err) {
        console.log('cant get stay', err)
    }
}

async function save(stay, review) {
    try {
        if (stay._id) {
            const reviewToAdd = {
                id: utilService.makeId(),
                ...review,
            }

            stay.reviews.unshift(reviewToAdd)
            return await httpService.put(`stay/${stay._id}`, stay)
        } else {
            return await httpService.post('stay/', stay)
        }
    } catch (err) {
        console.log('cant save stay', err)
    }
}

async function remove(id) {
    try {
        return await httpService.delete(`stay/${id}`)
    } catch (err) {
        console.log('not authorized!', err)
    }
}