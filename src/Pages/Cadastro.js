import "../App.css";
import "./cadastro.css";
import Modal from "react-modal";
import { useState } from "react";
import Add from "../images/addimage.png";
import CloseIcon from "../images/close.png";
import { FormCadastro } from "../components/FormCadastro/FormCadastro";

Modal.setAppElement("#root");

export const Cadastro = () => {
  const [resetIsOpen, setIsOpen] = useState(false);

  const handleIsOpenReset = () => {
    setIsOpen(true);
  };

  const handleIsCloseReset = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      width: "90%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      borderRadius: "8px",
    },
  };

  return (
    <div className="container">
      <button className="btn-modal" onClick={handleIsOpenReset}>Cadastrar Remédio</button>
      <Modal
        isOpen={resetIsOpen}
        onRequestClose={handleIsCloseReset}
        style={customStyles}
      >
        <button className="btn-close" onClick={handleIsCloseReset}>
          <img
            className="close-image"
            src={CloseIcon}
            alt="botão de fechar"
          ></img>
        </button>
        <h2 className="txt-principal">Cadastrar Remédio</h2>
        <img className="add-image" alt="add imagem" src={Add}></img>
        <FormCadastro />
        <button className="btn-cadastrar" type="submit">
              Cadastrar
            </button>
      </Modal>
    </div>
  );
};
