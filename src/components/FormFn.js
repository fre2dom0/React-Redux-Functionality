import React, {createRef, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formActions } from '../store/form'
import "../App.css"


export default function FormFn() {
  const dispatch = useDispatch()
  const nameRef = createRef()
  const surnameRef = createRef()
  const nicknameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const infos = useSelector(state => state.form)


  const getValue = (e) => {
    e.preventDefault()
    dispatch(formActions.getValue(
      {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      nickname: nicknameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
      }
    )) 

    nameRef.current.value = ""
    surnameRef.current.value = ""
    nicknameRef.current.value = ""
    emailRef.current.value = ""
    passwordRef.current.value = ""
  }

  const showPass = (e) => {
    e.preventDefault()
    dispatch(formActions.showPass())
  }

  const resetPass = (e) => {
    e.preventDefault()
    dispatch(formActions.resetPass())
  }
  return (
    <div className="form">
    <form>
      <div className="inputs">
        <input ref={nameRef} type={"text"} placeholder="Name"></input>
        <input ref={surnameRef} type={"text"} placeholder="Surname"></input>
        <input ref={nicknameRef} type={"text"} placeholder="Nickname"></input>
        <input ref={emailRef} type={"email"} placeholder="E-mail"></input>
        <input ref={passwordRef} type={"password"} placeholder="Password"></input>
      </div>
      <div className="button">
        <button onClick={getValue}>Click</button>
      </div>
    </form>
    
    <div className="infos">
      <div className="texts">
        <div className="info">
          <h2>Your Infos</h2>
          <h3>Your Name: {infos.name}</h3>
          <h3>Your Surname: {infos.surname}</h3>
          <h3>Your Nickname: {infos.nickname}</h3>
          <h3>Your E-mail: {infos.email}</h3>
        </div>
        <div className="passwordShow">
          <h3>Your Password: <span type="password">{infos.closed ? infos.closedPassword : infos.password}</span></h3>
          <button onClick={showPass}>Show</button>
          <button onClick={resetPass}>Reset</button>
        </div>
      </div>
    </div>
  </div>
  )
}
