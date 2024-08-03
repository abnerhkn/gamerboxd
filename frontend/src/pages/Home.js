import React from "react";
import SearchBar from "../components/SearchBar";
import logo from "../assets/logo.svg";
import "../styles/Home.css";
import Button from "../components/Button";
import Modal from "../components/CustomModal";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Popular from "./sections/Popular";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <img src={logo} alt="Logo" />
          <SearchBar placeholder={"Jogos, membros, desenvolvedores..."} />
          <Button
            className={"header-button"}
            onClick={openLoginModal}
            label="ENTRAR"
          />
          <Button
            className={"header-button"}
            onClick={openRegisterModal}
            label="CADASTRAR"
          />
          <Button className={"header-button"} label="JOGOS" />
          <Button className={"header-button"} label="LISTAS" />
        </div>
        <div className="container-home">

            <Popular />
        </div>
      </div>
      <Modal isOpen={isLoginOpen} onRequestClose={closeLoginModal}>
        <Login />
      </Modal>
      <Modal isOpen={isRegisterOpen} onRequestClose={closeRegisterModal}>
        <Register />
      </Modal>
    </div>
  );
};

export default Home;
