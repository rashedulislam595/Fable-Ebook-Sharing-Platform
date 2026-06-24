import { serverFetch } from "../core/server"

export const getPurchasesByBuyerId = async(buyerId)=>{
    return serverFetch(`/api/purchases?buyerId=${buyerId}`)
}