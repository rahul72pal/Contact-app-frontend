import React, { useState } from 'react'


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission here
  }

  const googleAuth = () => {
    window.open(`http://localhost:3000/auth/google/callback`, "_self")
  }

  return (
    <div>
      <button onClick={googleAuth} >login with google</button>
    </div>
  )
}

export default LoginPage