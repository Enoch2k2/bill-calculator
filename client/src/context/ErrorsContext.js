import { createContext, useState } from "react";

const ErrorsContext = createContext([])

const ErrorsProvider = ({ children }) => {
  const [errors, setErrors] = useState([])

  const clear = () => {
    setErrors([])
  }

  return <ErrorsContext.Provider value={{ errors, setErrors, clear }}>{ children }</ErrorsContext.Provider>
}

export { ErrorsContext, ErrorsProvider }