const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const serverFetch = async(api)=>{
    const res = await fetch(`${baseUrl}${api}`);
    const data = await res.json();
    return data;
}