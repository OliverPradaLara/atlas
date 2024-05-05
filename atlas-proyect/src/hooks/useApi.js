import { useEffect, useState } from "react"


const getUser = async(url) => {
    const res = await fetch(url)
    const data = await res.json() 
    return data
}

export const useApi = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState('')

    useEffect(() => {
      const user = getUser(url)
      user.then(res => {
        setData(res)
    }).catch(err=>{
        setIsError(err.message)
    }).finally(()=>{
        setIsLoading(false)
    })

    }, [])
    

    return {
        data,
        isLoading,
        isError,

    }
}