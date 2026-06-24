import { serverFetch } from "../core/server"

export const getPurchasesByBuyerId = async(buyerId)=>{
    return serverFetch(`/api/purchases?buyerId=${buyerId}`)
}

export const getPurchasesBookById = async(id)=>{
    return serverFetch(`/api/purchases/${id}`)
}