import { serverFetch } from "../core/server"

export const getAllEbooks = async ()=>{
    return serverFetch('/api/ebooks')
}

export const getEbooksByWriterId = async(writerId)=>{
    return serverFetch(`/api/ebooks?writerId=${writerId}`)
}

export const getEbookById= async(id)=>{
    return serverFetch(`/api/ebooks/${id}`)
}