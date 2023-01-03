import React, { useState } from "react";
import "./Wallet.css";
import imgWallet from "../../assets/images/wallet/wallet.svg";
import logo from "../../assets/icons/logo.svg";
import Wallets from "../../components/wallets/Wallets";
import logoMetamask from "../../assets/icons/metamask.svg";
import logoCoinbase from "../../assets/icons/coinbase.svg";
import walletConect from "../../assets/icons/walletConect.svg";
import arrowRight from "../../assets/icons/arrow-up-right-white.svg";
import logoPhantom from "../../assets/icons/phantom.svg";
import logoPortis from "../../assets/icons/portis.svg";

const Wallet = () => {
    /*Mostrando u ocultando la lista de wallets debajo del BTN  */
  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  /* Disparando modal al darle click a una de las wallets  */
   const [showModal, setShowModal] = useState(false);

  const ButtonClickModal = () => {
    setShowModal(true);
  };



  return (
    <section className="wallet">
      <div className="wallet_image">
        <img src={imgWallet} alt="imagen" />
        <div className="wallet_logo">
          <img src={logo} alt="logo" />
          <h3>Inhands</h3>
        </div>
      </div>
      <div className="wallet_list">
        <h2>
          Una plataforma <span>segura y seleccionada </span> <br />
          para coleccionar e intercambiar <br />
          <span>Utility NFT’s.</span>
        </h2>
        <div className="wallet_list_details">
          <Wallets onClick={ButtonClickModal} imgLogo={logoCoinbase} nameWallet="Metamask" />

          <Wallets imgLogo={logoCoinbase} nameWallet="Coinbase" />

          <Wallets imgLogo={walletConect} nameWallet="WalletConect" />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className="wallet_list_btn"
        >
           {showDiv ? 'Ver menos' : 'Ver más'} <img src={arrowRight} alt="flecha" />
        </button>

        {showDiv && (
          <div className="wallet_list_extra">
            <Wallets imgLogo={logoPhantom} nameWallet="Phatom" />
            <Wallets imgLogo={logoPortis} nameWallet="Portis" />
          </div>
        )}
      </div>
      {showModal && (
        <div>
          <p>Este es el contenido del modal</p>
          <button onClick={() => setShowModal(false)}>Cerrar modal</button>
        </div>
      )}
    </section>
  );
};

export default Wallet;
