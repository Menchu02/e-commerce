import React, { useState } from 'react'

export default function Suscripcion() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    city: '',
    email: '',
    dni: '',
  })
  const [registrado, setRegistrado] = useState(false)
  const [error, setError] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevValue) => ({
      ...prevValue,
      //spread operator de prevValue(copia)y le añadimos name:value
      [name]: value,
      //clave, valor, firtsName se va a llenar con value, lastName se va a llenar con value, city se va allenar con value, y image igual
    }))
  }

  const { firstName, lastName, city, dni, email } = user

  const submitHandler = (e) => {
    e.preventDefault()
    //Validar que los campos esten llenos
    if (firstName.trim() === '') {
      setError('Por favor complete su nombre')
      return
    }

    if (lastName.trim() === '') {
      setError('Por favor complete su apellido')
      return
    }
    if (city.trim() === '') {
      setError('Por favor introduzca su ciudad')
      return
    }
    if (email.trim() === '') {
      setError('Por favor introduzca su email')
      return
    }
    if (dni.trim() === '') {
      setError('Por favor indrotuzca su dni o nie')
      return
    }

    //si todo esta correcto marco el estado como resgitrado
    setRegistrado(true)
  }

  return registrado ? (
    <div className="answer-form">
      <h2 className="answer-form_h">
        Bienvenido/a {firstName} {lastName} <br />
        Muchas gracias por tu nueva suscripción , <br /> en breves recibirás un
        e-mail con lo mejor <br /> de la próxima temporada de verano <br />y
        todas nuestras ofertas
      </h2>
    </div>
  ) : (
    <div>
      <h2 className="suscripcion__h">
        Escribe tus datos <span>personales </span>para <br /> recibir cada
        <span> semana</span> todas <br /> nuestras <span> ofertas</span>
      </h2>

      {error ? <div>{error}</div> : null}
      {/* <div className="form-container"> */}
      <form className="div__form" onSubmit={submitHandler}>
        <div className="div__form__inputs">
          <label>
            <div className="div__form__inputs__campo">
              <input
                className="div__form__inputs__campo--style"
                type="text"
                value={firstName}
                name="firstName"
                onChange={handleChange}
                placeholder="Nombre"
              />
            </div>
            <div className="div__form__inputs__campo">
              <input
                className="div__form__inputs__campo--style"
                type="text"
                value={lastName}
                name="lastName"
                onChange={handleChange}
                placeholder="Apellidos"
              />
            </div>
            <div className="div__form__inputs__campo">
              <input
                className="div__form__inputs__campo--style"
                type="text"
                value={city}
                name="city"
                onChange={handleChange}
                placeholder="Ciudad"
              />
            </div>
            <div className="div__form__inputs__campo">
              <input
                className="div__form__inputs__campo--style"
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
                placeholder="Email, ej:tienda@gmail.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </div>

            <div className="div__form__inputs__campo">
              <input
                className="div__form__inputs__campo--style"
                type="text"
                value={dni}
                name="dni"
                placeholder="DNI/NIF, ej:78787878x"
                pattern="[0-9]{8}[A-Za-z]{1}"
                title="Debe poner 8 números y una letra"
                onChange={handleChange}
              />
            </div>
            <div className="div__form__inputs__campo">
              <button className="form__button" type="submit">
                Guardar Perfil
              </button>
            </div>
          </label>
        </div>
      </form>
    </div>
  )
}
