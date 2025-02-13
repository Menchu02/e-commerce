import React, { useState } from 'react'
import { acceso } from './acceso'
import { Link } from 'react-router-dom'

export default function LoginUseState() {
  const [username, setUserName] = useState('') //input
  const [password, setPassword] = useState('') // input
  const [isLoading, setIsLoading] = useState(false) // mostrar mensaje en el botón mientras se carga la petición
  const [error, setError] = useState('') // mostrar mensaje de error
  const [isLoggedIn, setIsLoggedIn] = useState(false) // mostrar login

  const onSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    setError('')

    try {
      await acceso({ username, password })
      setIsLoggedIn(true)
    } catch (error) {
      setError('Usuario o contraseña incorrectas, prueba de nuevo')
      // setUserName y setPassword en vacío hace que si sale error los input se queden vacíos
      setUserName('')
      setPassword('')
    }

    setIsLoading(false)
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div>
            <h2 className="welcome__p">
              Hola {username}, disfruta de <br /> tu tienda favorita
            </h2>
          </div>
          <div className="welcome__div">
            <Link to="/Tienda" className="button">
              <p className="welcome__link">Ir a tienda</p>
            </Link>
            <button
              className="logOutButton"
              onClick={() => {
                setIsLoggedIn(false)
                setIsLoading(false)
                setUserName('')
                setPassword('')
              }}
            >
              Cerrar sesión
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="cuenta__h">
            Escribe tu usuario <span>y </span> <br />
            contraseña para acceder a tu <br /> cuenta personal
            {/* <span> semana</span> todas <br /> nuestras <span> ofertas</span> */}
          </h2>

          <form className="div__formulario" onSubmit={onSubmit}>
            <div className="div__formulario__inputs">
              {/* si error es true, queremos un parrafo que nos muestre error */}
              {error && <p>{error}</p>}
              <p>Accede a tu cuenta</p>
              <label>
                <div className="div__formulario__inputs__campo">
                  <input
                    className="div__formulario__inputs__campo--style"
                    type="text"
                    value={username}
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Usuario"
                  />
                </div>

                <div className="div__formulario__inputs__campo">
                  <input
                    className="div__formulario__inputs__campo--style"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                  />
                </div>
                <div className="div__formulario__inputs__campo">
                  <button className="boton" type="submit">
                    {isLoading ? 'Iniciando sesión' : 'Iniciar sesión'}
                  </button>
                </div>
              </label>
              {/* si isLoading es true, mostramos Logging in..., sino vamos a mostrar Login */}
            </div>
          </form>
        </>
      )}
    </div>
  )
}
