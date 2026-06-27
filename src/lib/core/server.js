import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const authHeader = async()=>{
    const token = await getUserToken()
    const header = token? {
        authorization: `Bearer ${token}`
    }:{}
    return header
}

// handle 401 & 403
export const handleStatusCode = async(res)=>{
    console.log(res.status,"status")
    if(res.status === 401){
        redirect('/unauthorized')
    }else if(res.status === 403){
        redirect('/forbidden')
    }
    return res.json()
}

export const protectedFetch = async(api)=>{
    const res = await fetch(`${baseUrl}${api}`,{
        headers: await authHeader()
    });
    const data = await res.json();
    return data;
}

export const serverMutation = async(api,newJobData,method = 'POST')=>{
    const res = await fetch(`${baseUrl}${api}`,{
        method: method,
        headers:{
            'Content-Type':'application/json',
            ...await authHeader()
        },
        body: JSON.stringify(newJobData)
    })
    const data = await handleStatusCode(res);
    return data;
}
