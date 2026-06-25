import { serverFetch } from "../core/server"

export const getUsers = async() =>{
    return serverFetch('/api/users')
}

export const getAllUsersByAdmin = async()=>{
    return serverFetch('/api/admin/ebooks')
}