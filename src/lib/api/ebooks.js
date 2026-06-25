import { serverFetch } from "../core/server"

export const getAllEbooks = async (status)=>{
    return serverFetch(`/api/ebooks?status=${status}`)
}

export const getAllEbooksByAdmin = async()=>{
    return serverFetch('/api/ebooks')
}

export const getEbooksByWriterId = async(writerId)=>{
    return serverFetch(`/api/ebooks?writerId=${writerId}`)
}

export const getEbookById= async(id)=>{
    return serverFetch(`/api/ebooks/${id}`)
}