'use server'

import { serverMutation } from "../core/server"

export const updateUserRole =async(userId,role)=>{
    return serverMutation(`/api/users/${userId}`,role,"PATCH")
}