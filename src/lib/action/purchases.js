'use server'

import { serverMutation } from "../core/server"

export const createPurchases = async(purchasesData)=>{
    return serverMutation('/api/purchases',purchasesData)
}