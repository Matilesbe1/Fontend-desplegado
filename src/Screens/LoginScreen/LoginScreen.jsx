import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { login } from '../../services/authService'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../Context/AuthContext'
import './LoginScreen.css'

const LoginScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { onLogin } = useContext(AuthContext)
  useEffect(
    () => {
      const query = new URLSearchParams(location.search)
      const from = query.get('from')
      if (from === 'verified_email') {
        alert('Has validado tu mail exitosamente')
      }
    },
    [] //Solo queremos que se ejecute cuando se monte el componente
  )


  const LOGIN_FORM_FIELDS = {
    EMAIL: 'email',
    PASSWORD: 'password'
  }

  const initial_form_state = {
    [LOGIN_FORM_FIELDS.EMAIL]: '',
    [LOGIN_FORM_FIELDS.PASSWORD]: ''
  }

  const { response, error, loading, sendRequest, resetResponse } = useFetch()

  function handleLogin(form_state_sent) {
    resetResponse()
    sendRequest(
      () => {
        return login(
          form_state_sent[LOGIN_FORM_FIELDS.EMAIL],
          form_state_sent[LOGIN_FORM_FIELDS.PASSWORD]
        )
      }
    )
  }

  const {
    form_state,
    onInputChange,
    handleSubmit,
    resetForm
  } = useForm(initial_form_state, handleLogin)

  useEffect(
    () => {
      if (response && response.ok) {
        //Queremos que persista en memoria el auth token
        //Dejamos que el context se encargue de que sucedera
        onLogin(response.body.auth_token)

      }
    },
    [response]
  )

  const test = async (e) => {
    e.preventDefault()
    const http_response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "email": "milesbegueris@gmail.com",
        "password": "Matilesbe1"
      })
    })
    const server_response = await http_response.json()
    console.log(server_response)
  }

  return (
    <div className="Form-container">
      {/* <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email: </label>
          <input type="text" placeholder="jose@algo.com" value={form_state[LOGIN_FORM_FIELDS.EMAIL]} name={LOGIN_FORM_FIELDS.EMAIL} onChange={onInputChange} id={'email'} />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" placeholder="Josesito206" value={form_state[LOGIN_FORM_FIELDS.PASSWORD]} name={LOGIN_FORM_FIELDS.PASSWORD} onChange={onInputChange} id={'password'} />
        </div>

        {error && <span style={{ color: 'red' }}> {error} </span>}
        {response && <span style={{ color: 'green' }}> Successful Login </span>}

        {
          loading
            ? <button disabled>Loggin In</button>
            : <button>Login</button>
        }
      </form> */}

      <div className='body Form-container'>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Login </p>
          <p className="message">Bienvenido de nuevo</p>
          <div className='form-field'>
            <label className='name-input' htmlFor="email">
              <input className="input"
                type="text"
                placeholder
                required
                value={form_state[LOGIN_FORM_FIELDS.EMAIL]} 
                name={LOGIN_FORM_FIELDS.EMAIL} 
                onChange={onInputChange} 
                id={'email'} />
              <span>Email:</span>
            </label>
          </div>
          <div className='form-field'>
            <label className='name-input' htmlFor="password">
              <input className="input"
                type="password"
                placeholder
                required
                value={form_state[LOGIN_FORM_FIELDS.PASSWORD]} 
                name={LOGIN_FORM_FIELDS.PASSWORD} 
                onChange={onInputChange} 
                id={'password'} 
              />
              <span>Contraseña:</span>
            </label>
          </div>
          {error && <span style={{ color: 'red' }}> {error} </span>}
          {response && <span style={{ color: 'green' }}> Usuario logeado con exito! </span>}
          {
            loading
              ? <button disabled className='login-submit'>Login in</button>
              : <button className='login-submit'>Login</button>
          }
          <p className="signin">Todavia no tenes una cuenta? <a href="./register">Registrarse</a> </p>
          
        </form>
      </div>
    </div>
  )
}

export default LoginScreen