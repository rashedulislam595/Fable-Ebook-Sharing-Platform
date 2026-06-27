import { serverFetch } from "../core/fetch"
import { protectedFetch } from "../core/server"

export const getUsers = async () => {
    return protectedFetch('/api/users')
}

export const getAllUsersByAdmin = async () => {
    return serverFetch('/api/admin/ebooks')
}