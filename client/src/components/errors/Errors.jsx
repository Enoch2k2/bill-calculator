import React, { useContext } from 'react'
import { ErrorsContext } from '../../context/ErrorsContext'

const Errors = () => {
  const { errors } = useContext(ErrorsContext);

  const errs = errors.map((error, idx) => <li key={idx}>{error}</li>)
  return (
    <ul>
      { errs }
    </ul>
  )
}

export default Errors