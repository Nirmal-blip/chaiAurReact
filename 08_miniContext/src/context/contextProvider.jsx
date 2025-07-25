import {useState, React} from 'react';
import UserContext from './UserContext';


function ContextProvider( {children}){

const [user,setUser]=useState(null);


    return(
<>
<UserContext.Provider value={{user,setUser}}>
{children}
</UserContext.Provider>
</>
    )

}

export default ContextProvider;