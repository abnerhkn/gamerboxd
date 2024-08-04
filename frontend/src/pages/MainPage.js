import React from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import logo from "../assets/logo.svg";
import "../styles/Home.css";

const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#1E1E1E", height: "100vh" }}>
      <div className="header">
        <div className="header-content">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "170px", height: "50px" }}
          />
          <SearchBar placeholder={"Jogos, membros, desenvolvedores..."} />
          <Button className={"header-button"} label={"HOME"} />
          <Button className={"header-button"} label={"JOGOS"} />
          <Button className={"header-button"} label={"LISTAS"} />
          <Button className={"header-button"} label={"NOVIDADES"} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
