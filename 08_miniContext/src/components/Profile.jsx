import {React,useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
//
const {user}=useContext(UserContext);
  
if(!user){
    return (
        <div className="flex justify-center mt-10 text-white font-bold"> Please Login!</div>
    )
}
return (
    <div className="text-center mt-10 text-white font-bold">
        <h2>Profile</h2>
        <p>Username: {user.userName}</p>
        <p>Password: {user.password}</p>
    </div>
)


}

export default Profile