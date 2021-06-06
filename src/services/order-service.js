import { utilService } from '../services/util-service'
import { httpService } from './http-service'
import moment from 'moment'


export const orderService = {
    query,
    remove,
    add,
    update,
}

async function query(user = { _id: null }) {
    const orders = await httpService.get(`order`, user)
    return orders;
}

async function add(trip, stay, loggedInUser) {
    const order = {
        // _id: utilService.makeId(),
        createdAt: Date.now(),
        buyer: {
            _id: loggedInUser._id,
            fullName: loggedInUser.fullname
        },
        totalPrice: 555555,
        startDate: trip.startDate.format('YYYY-MM-DD'),
        endDate: trip.endDate.format('YYYY-MM-DD'),
        guests: {
            adults: trip.adults,
            children: trip.children,
        },
        stay: {
            _id: stay._id,
            name: stay.name,
            price: stay.price
        },
        host: stay.host,
        status: 'pending',
    }
    return await httpService.post(`order`, order)
}

function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}

async function update(order) {
    return await httpService.put(`order/${order._id}`, order)

}
