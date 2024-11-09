import { useContext, useState } from "react"
import UserContext from "../../Context/UserContext"


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
       e.preventDefault()
       setUser({username, password})  // data chla gya ✅ ab data lena kaise h vo padhna padega ? 
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={username}
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                value={password}
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default Login
