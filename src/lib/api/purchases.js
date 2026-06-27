import { protectedFetch } from "../core/server"

export const getAllPurchasesData = async()=>{
    return protectedFetch('/api/purchases')
}

export const getPurchasesByBuyerId = async(buyerId)=>{
    return protectedFetch(`/api/purchases?buyerId=${buyerId}`)
}

export const getPurchasesByWriterId = async(writerId)=>{
    return protectedFetch(`/api/purchases?writerId=${writerId}`)
}

export const getPurchasesBookById = async(id)=>{
    return protectedFetch(`/api/purchases/${id}`)
}