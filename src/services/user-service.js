// import { storageService } from './asyncStorageService'
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
    return await httpService.get(`user`)
}

async function getById(userId) {
    return await httpService.get(`user/${userId}`)
}

async function remove(userId) {
    return await httpService.delete(`user/${userId}`)
}

async function update(user) {
    user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
    // console.log('USER', userCred)
    const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}