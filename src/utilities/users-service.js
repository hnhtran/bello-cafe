import { Buffer } from 'buffer';
import * as usersAPI from './users-api';
require('buffer');

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token)
    return getUser()
}

export function logOut() {
    localStorage.removeItem('token');
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export function getToken() {
    const token = localStorage.getItem('token')
    // console.log(token.split('.')[1])
    if (!token) return null
    // const payload = JSON.parse(atob(token.split('.')[1]))
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64'))
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        return null
    }
    return token
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).user : null
    // return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function checkToken() {
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr))
}