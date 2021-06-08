import { httpService } from './http-service'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
}

async function getUsers() {
    try {
        return await httpService.get(`user`)
    } catch (err) {
        console.log('cant get users', err)
    }
}

async function getById(userId) {
    try {
        return await httpService.get(`user/${userId}`)
    } catch (err) {
        console.log('cant get user', err)
    }
}

async function remove(userId) {
    try {
        return await httpService.delete(`user/${userId}`)
    } catch (err) {
        console.log('not authorized!', err)
    }
}

async function update(userToUpdate) {
    try {
        const user = await httpService.put(`user/${userToUpdate._id}`, userToUpdate)
        // Handle case in which admin updates other user's details
        if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    } catch (err) {
        console.log('cant update', err)
    }
}

async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred)
        if (user) return _saveLocalUser(user)
    } catch (err) {
        console.log('user not found', err)
    }
}

async function signup(userCred) {
    try {
        const newUser = {
            ...userCred,
            isHost: false,
            imgUrl: 'https://ozgrozer.github.io/100k-faces/0/0/000924.jpg'
        }

        const user = await httpService.post('auth/signup', newUser)
        return _saveLocalUser(user)
    } catch (err) {
        console.log('cant add new user', err)
    }
}

async function logout() {
    try {
        sessionStorage.clear()
        return await httpService.post('auth/logout')
    } catch (err) {
        console.log('no loged user', err)
    }
}

// async function onBecomeHost(user) {

// }

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}