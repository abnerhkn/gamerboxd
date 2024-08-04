import React from "react";
import SearchBar from "../components/SearchBar";
import logo from "../assets/logo.svg";
import "../styles/Home.css";
import Button from "../components/Button";
import CustomModal from "../components/CustomModal";
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
          <img src={logo} alt="Logo" style={{ width: "170px", height: "50px" }} />
          <SearchBar placeholder={"Jogos, membros, desenvolvedores..."} />
          <Button
            className={"header-button"}
            onClick={openLoginModal}
            label={"ENTRAR"}
          />
          <Button
            className={"header-button"}
            onClick={openRegisterModal}
            label={"CADASTRAR"}
          />
          <Button className={"header-button"} label={"JOGOS"} />
          <Button className={"header-button"} label={"LISTAS"} />
        </div>
        <div className="container-home">
            <Popular />
        </div>
      </div>
      <CustomModal isOpen={isLoginOpen} onRequestClose={closeLoginModal}>
        <Login />
      </CustomModal>
      <CustomModal isOpen={isRegisterOpen} onRequestClose={closeRegisterModal}>
        <Register />
      </CustomModal>
    </div>
  );
};

export default Home;
