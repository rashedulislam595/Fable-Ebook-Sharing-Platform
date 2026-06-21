import { serverFetch } from "../core/server"

export const getAllEbooks = async ()=>{
    return serverFetch('/api/ebooks')
}