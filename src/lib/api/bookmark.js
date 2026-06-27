import { serverFetch } from "../core/fetch"


export const getBookmarksByUserId = async(userId)=>{
    return serverFetch(`/api/bookmarks?userId=${userId}`)
}