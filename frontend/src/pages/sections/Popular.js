import React from "react";
import Card from "../../components/CardComponent";
import "../../styles/Popular.css";
import Button from "../../components/Button";
import Separator from "../../assets/separator.svg";
import Modal from "../../components/CustomModal";
import Rate from "../../components/Rate";

const Popular = () => {
    const [isRateOpen, setIsRateOpen] = React.useState(false);

    const openRateModal = () => {
        setIsRateOpen(true);
    };

    const closeRateModal = () => {
        setIsRateOpen(false);
    };

    return (
        <div className="popular-content">
            <div className="popular-main">
                <h2>Avalie, salve e compartilhe seus jogos favoritos. </h2>
                <p>Feito por amantes de games, para amantes de games.</p>
                <Button className={"primary"} label={"Começar agora!"} />
            </div>
            <h3>Popular no Gamerboxd</h3>
            <div className="cards">
                <Card onClick={openRateModal} withHover={Card} />
            </div>
            <img src={Separator} alt="" />
            <p>
                Escreva e compartilhe <b>reviews</b>. Faça <b>listas</b> dos seus jogos
                favoritos. Veja as <b>novidades.</b>
            </p>
            <Modal isOpen={isRateOpen} onRequestClose={closeRateModal}>
                <Rate />
            </Modal>
        </div>
    );
};

export default Popular;
