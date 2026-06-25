'use server'

import { serverMutation } from "../core/server"

export const createEbook = async(newEbook)=>{
    return serverMutation('/api/ebooks',newEbook)
}

export const updateStatus = async(id,status)=>{
    return serverMutation(`/api/ebooks/${id}`,status,"PATCH")
}