import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/Login.css";
import Logo from "../assets/logo.svg";
const Login = () => {
  return (
    <div className="container">
      <div className="container-content">
        <h2>Login</h2>
        <Input type={"text"} placeholder={"Usuário"} />
        <Input type={"password"} placeholder={"Digite sua senha"} />
        <a href="/resetar-senha">Esqueci minha senha</a>
        <Button className={"primary"} label={"Entrar"} />
        <a href="/registrar">Clique aqui</a>
      </div>
      <div className="separador"></div>
      <div className="img-content">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Login;
