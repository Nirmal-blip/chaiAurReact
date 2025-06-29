import { useState,useCallback,useEffect ,useRef} from 'react'

function App() {
  //hooks
  const[length,setLength]=useState(8);
  const[isNumber,setIsNumber]=useState(false);
  const[isChar,setIsChar]=useState(false);
  const[password,setPassword]=useState('');


//useRef hook (used for taking the reference)
const passwordRef = useRef(null);//acha yeh keval reference leta hai  

//copy to clipboard function
const copyToClipboard =useCallback( () => {
  passwordRef.current?.select();
  //passwordRef.current?.setSelectionRange(0,3);// to set the range of selection
 window.navigator.clipboard.writeText(password)
 alert("Password copied to clipboard!");
}, [password]);

  //making the password generator method

// useCallback(function,dependencies)   
// is used to memoize the function so that it doesn't get recreated on every render unless dependencies change.


const generatePassword = useCallback( ()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(isNumber) str += "0123456789";
  if(isChar) str += "!@#$%^&*()_+[]{}|;:,.<>?";

  for (let i=0;i<length;i++){
  const randomIndex=Math.floor(Math.random()*str.length);
  pass += str[randomIndex];

  }
  setPassword(pass);
},[length,isNumber,isChar,setPassword]);



//use Effect hook(initially run if there is a change in the dependency)

useEffect(() => {
  generatePassword();
}, [length, isNumber, isChar, generatePassword]);


  return (
    <>
    
    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 pb-4 my-8 text-black-500 bg-gray-700">
      <p className="text-2xl text-white text-center mb-2">Password Generator</p>

     <div className=" flex shadow rounded-lg bg-white overflow-hidden mb-4">
      <input 
        type="text" 
        value={password} 
        className="outline-none w-full py-1 px-3"
        placeholder=" Password"
        readOnly
        ref={passwordRef}
       />
       <button  onClick={copyToClipboard}
        className="bg-blue-500 hover:bg-[#4e947c] text-white px-4 py-1">Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
             <input
             type="range"
             min={8}
             max={50}
            value={length}
             className='cursor-pointer'
             onChange={(e)=>{
              setLength(e.target.value);
             }}/>
             <label className="text-white">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={isNumber}
            id="numberInput"
            onChange={()=>{
              setIsNumber((prev) => !prev);}}/>
              <label className="text-white">Number</label>
              </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={isChar}
            id="numberInput"
            onChange={()=>{
              setIsChar((prev) => !prev);}}/>
              <label className="text-white">Character</label>
              </div>
      </div>
      </div>
    </>
  )
}

export default App
