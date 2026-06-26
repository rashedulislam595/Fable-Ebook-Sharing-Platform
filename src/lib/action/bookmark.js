'use server'

import { serverMutation } from "../core/server"

export const createBookmark = async(bookmarkData)=>{
    return serverMutation('/api/bookmarks',bookmarkData)
} 

export const deleteBookmark = async(id)=>{
    return serverMutation(`/api/bookmarks/${id}`,{},"DELETE")
}