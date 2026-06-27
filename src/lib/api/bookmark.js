import { protectedFetch } from "../core/server"


export const getBookmarksByUserId = async(userId)=>{
    return protectedFetch(`/api/bookmarks?userId=${userId}`)
}