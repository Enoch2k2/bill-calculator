import { createContext, useContext, useState } from "react";
import { ErrorsContext } from "./ErrorsContext";

const UserContext = createContext({})

const UserProvider = ({children}) => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [ loggedIn, setLoggedIn ] = useState(false)

  const { setErrors } = useContext(ErrorsContext);

  const checkSession = async () => {
    const resp = await fetch('/check_session')
    if(resp.status === 200) {
      const data = await resp.json()
      loginUser(data)
    } else {
      console.log('not logged in')
    }
  }

  const signup = async user => {
    const options = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
    const resp = await fetch("/signup", options)
    const data = await resp.json()

    if(data.errors) {
      setErrors(data.errors)
    } else {
      loginUser(data)
    }
  }

  const loginUser = user => {
    setCurrentUser(user)
    setLoggedIn(true)
  }

  return <UserContext.Provider value={{ currentUser, loggedIn, checkSession, signup }}>{ children }</UserContext.Provider>
}

export { UserContext, UserProvider }