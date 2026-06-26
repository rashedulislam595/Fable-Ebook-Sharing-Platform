'use server'

import { serverMutation } from "../core/server"

export const createEbook = async(newEbook)=>{
    return serverMutation('/api/ebooks',newEbook)
}

export const updateStatus = async(id,updateData)=>{
    return serverMutation(`/api/ebooks/${id}`,updateData,"PATCH")
}

export const DeleteEbooksById = async(id)=>{
    return serverMutation(`/api/ebooks/${id}`,{},"DELETE")
}