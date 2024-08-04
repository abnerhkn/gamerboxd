import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";
import "../styles/Register.css";
import Logo from "../assets/logo.svg";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const checkUsernameExists = async (username) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/usuarios/check-username/${username}`
      );
      return response.data.exists;
    } catch (error) {
      console.error("Erro ao verificar nome de usuário:", error);
      return false;
    }
  };

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setMessage("Por favor, preencha todos os campos.");
      setMessageType("error");
      setShowMessage(true);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("E-mail inválido");
      setMessageType("error");
      setShowMessage(true);
      return;
    }

    if (password.length < 6) {
      setMessage("A senha deve ter no mínimo 6 caracteres");
      setMessageType("error");
      setShowMessage(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem");
      setMessageType("error");
      setShowMessage(true);
      return;
    }

    const usernameExists = await checkUsernameExists(username);
    if (usernameExists) {
      setMessage("Nome de usuário já existe");
      setMessageType("error");
      setShowMessage(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuarios",
        {
          name: username,
          email,
          password,
        }
      );
      setMessage("Cadastro realizado com sucesso");
      setMessageType("success");
      setShowMessage(true);
    } catch (error) {
      setMessage("Erro ao cadastrar");
      setMessageType("error");
      setShowMessage(true);
      console.error(error);
    }
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="container">
      <div className="container-content">
        <h2>Cadastro</h2>
        <Input
          size={"large"}
          type={"text"}
          placeholder={"Usuário"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label=""
        />
        <Input
          size={"large"}
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label=""
        />
        <Input
          size={"large"}
          type={"password"}
          placeholder={"Senha"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label=""
        />
        <Input
          size={"large"}
          type={"password"}
          placeholder={"Confirme sua senha"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label=""
        />
        <Button
          className={"primary"}
          label={"Cadastrar"}
          onClick={handleRegister}
        />
        {showMessage && (
          <Message
            label={message}
            className={messageType}
            color={"white"}
            onClose={handleCloseMessage}
          />
        )}
        <div className="footer-register">
          <span>Já tem uma conta?</span>
          <a className="register" href="/login">
            Clique aqui
          </a>
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
