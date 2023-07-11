import React, { useContext, useState } from 'react'
import { Container, TextField, Button, makeStyles } from '@material-ui/core'
import { UserContext } from '../../context/userContext'
import { useFormik } from 'formik';
import * as yup from 'yup';


const useStyles = makeStyles({
  container: {
    width: '20%',
    marginTop: '60px'
  },
  button: {
    marginTop: '30px'
  }
})

const Signup = () => {
  const classes = useStyles()

  const { signup } = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = values => {
    console.log(values)
  }

  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter an username").max(15),
    password: yup.string().required("Password must exist").max(7)
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: formSchema,
    onSubmit: handleSubmit
  });

  return (
    <Container maxwidth="md" className={ classes.container }>
      <h2>Create Account</h2>

      <form onSubmit={ formik.handleSubmit }>
        <div>
          <TextField type='text' name="username" value={ formik.values.username } onChange={ formik.onChange } placeholder="username" />
          <p style={{ color: "red" }}> {formik.errors.username}</p>
        </div>
        <div>
          <TextField type='password' name="password" value={ formik.values.password } onChange={ formik.values.password} placeholder="password" />
          <p style={{ color: "red" }}> {formik.errors.password}</p>
        </div>

        <Button className={classes.button} type="submit" variant="contained" color="primary">Signup</Button>
      </form>
    </Container>
  )
}

export default Signup