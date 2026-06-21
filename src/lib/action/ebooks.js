'use server'

import { serverMutation } from "../core/server"

export const createEbook = async(newEbook)=>{
    return serverMutation('/api/ebooks',newEbook)
}