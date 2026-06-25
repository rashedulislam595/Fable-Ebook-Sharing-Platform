import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })
    const user = session?.user || null;
    return user;
}

export const requireRole = async(role)=>{
    const user = await getUserSession()
    const userRole = user.role || 'reader'
    if(userRole !== role){
        redirect('/unauthorized')
    }
}