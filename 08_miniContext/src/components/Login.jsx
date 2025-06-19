import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
export default function Login() {

    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");

    //using useContext hook to access the user context

const {setUser}=useContext(UserContext);

const handleSubmit=(e)=>{
  e.preventDefault();

        //set the user in context
        setUser({userName,password});
      


}

  return (
    <>
    <div >
        <h2 className="text-white font-bold text-2xl text-center mb-[100px] ">Login</h2>
<div className="flex flex-col justify-center items-center gap-2.5" >
    <h1 className="text-white flex gap-2 font-bold "> Username:  
        <input className="bg-white font-semibold border-2 border-gray-950 rounded-lg text-black " type="text"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
                placeholder='Enter your Username' />
              </h1>
                <h1  className="text-white flex gap-2 font-bold "> Password:
        <input className="bg-white font-semibold border-2 border-gray-950 rounded-lg text-black"  type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter your Password' />
                </h1>
                <button  className="border-2 hover:bg-gray-400 rounded-xl  bg-gray-300 w-full max-w-[25%]    "onClick={handleSubmit}>Login</button>    

 </div>                
 </div>   
        </>

  )
}
