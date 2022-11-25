import React, { createContext, useContext, useState } from 'react'

const Context = createContext();

function UserContext({children}) {
  const [user, setUser] = useState()
  return (
    <Context.Provider value={{user,setUser}} >
        {children}
    </Context.Provider>
  )
}

export const UserState = ()=>{
    return useContext(Context);
}

export default UserContext