import { serverFetch } from "../core/server"

export const getAllPurchasesData = async()=>{
    return serverFetch('/api/purchases')
}

export const getPurchasesByBuyerId = async(buyerId)=>{
    return serverFetch(`/api/purchases?buyerId=${buyerId}`)
}

export const getPurchasesBookById = async(id)=>{
    return serverFetch(`/api/purchases/${id}`)
}