import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "../styles/Register.css";
import Logo from "../assets/logo.svg";

const Register = () => {
  return (
    <div className="container">
      <div className="container-content">
        <h2>Cadastro</h2>
        <Input type={"text"} placeholder={"Usuário"} />
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Senha"} />
        <Input type={"password"} placeholder={"Confirme sua senha"} />
        <Button className={"primary"} label={"Entrar"} />
        <div className="footer-register">
          <span>Já tem uma conta?</span>
          <a className="register" href="/login">Clique aqui</a>
        </div>
      </div>
      <div className="separador"></div>
      <div className="img-content">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Register;
