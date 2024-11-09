import { useContext } from "react"
import UserContext from "../../Context/UserContext"


const Profile = () => {

  const { user } = useContext(UserContext)

  if(!user) return <p>Please Login</p>

  return <div className="text-orange-400">
          Welcome {user.username} and {user.password}
       </div>
    
  
}

export default Profile
