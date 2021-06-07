import { httpService } from './http-service'
import moment from 'moment'


export const orderService = {
    query,
    remove,
    add,
    update,
    calcDays
}

async function query(user = { _id: null, type: 'user' }) {
    try {
        return await httpService.get(`order`, user)
    } catch (err) {
        console.log('cant get orders', err)
    }
}

async function add(trip, stay, loggedInUser) {
    const days = calcDays(trip.startDate, trip.endDate)
    const totalPrice = stay.price * days + 10
    const order = {
        // _id: utilService.makeId(),
        createdAt: Date.now(),
        buyer: {
            _id: loggedInUser._id,
            fullName: loggedInUser.fullname,
            imgUrl: loggedInUser.imgUrl
        },
        totalPrice,
        city: stay.loc.city,
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
    try {
        return httpService.delete(`order/${orderId}`)
    } catch (err) {
        console.log('not authorized!', err)
    }
}

async function update(order) {
    return await httpService.put(`order/${order._id}`, order)
}

function calcDays(startDate, endDate) {
    const firstDay = moment(startDate.format('YYYY-MM-DD'))
    const lastDay = moment(endDate.format('YYYY-MM-DD'))
    const days = lastDay.diff(firstDay, 'days') + 1
    return days;
}
