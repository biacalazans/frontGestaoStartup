import React, { useState } from "react";
import api from "../../Services/api";
import "./login.css";
import {getToken, login, isAuthenticated} from '../../Services/auth'

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const submit = () => {
   api.post("/auth/login", {
    email: email,
    password: password
   })
   .then((response) => {
    console.log(response)
    login(response.data.token, response.data.role)
   })
   .catch((err) =>{
    console.log(err)
   })
  }

  return (
    <>
      <main className="mainLogin">
        <section>
          <h1>Login</h1>
          <br />
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={((event) => setEmail(event.target.value))}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={((event) => setPassword(event.target.value))}
              />
            </div>
          
            <button onClick={submit}  className="btn btn-primary">
              Entrar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
