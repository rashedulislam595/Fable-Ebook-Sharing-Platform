import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL



export const authHeader = async()=>{
    const token = await getUserToken()
    const header = token? {
        authorization: `Bearer ${token}`
    }:{}
    return header
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
    const data = await res.json();
    return data;
}
