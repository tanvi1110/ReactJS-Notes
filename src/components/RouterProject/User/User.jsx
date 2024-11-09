import { useParams } from "react-router-dom"
const User = () => {

    const { userid } = useParams()

    return (
        <div className="text-white bg-slate-700 p-4 w-2/3 text-3xl text-center">
            User : {userid}
        </div>
    )
}

export default User
