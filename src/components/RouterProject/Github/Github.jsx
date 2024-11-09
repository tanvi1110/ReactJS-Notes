import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


const Github = () => {
    const data = useLoaderData()


    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/tanvi1110`)
    //         .then((res) => res.json())  // response milega jo string format me hoga
    //         .then(data => setData(data)) // data milega
    // }, [])
    console.log(data)
    console.log(data.followers)

    // ab data mese value kaise nilega uske liye data ko study krna padega
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/tanvi1110`)
    return response.json()

}
