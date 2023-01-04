import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Wallet.css";
import imgWallet from "../../assets/images/wallet/wallet.svg";
import logo from "../../assets/icons/logo-white.svg";
import Wallets from "../../components/wallets/Wallets";
import logoMetamask from "../../assets/icons/metamask.jpeg";
import logoCoinbase from "../../assets/icons/coinbase.svg";
import walletConect from "../../assets/icons/walletConect.svg";
import arrowRight from "../../assets/icons/arrow-up-right-white.svg";
import logoPhantom from "../../assets/icons/phatom.jpeg";
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
        <Link to="/">
        <div className="wallet_logo">
          <img src={logo} alt="logo" />
          <h3>Inhands</h3>
        </div>
        </Link>
      </div>
      <div className="wallet_list">
        <h2>
          Una plataforma <span>segura y seleccionada </span> <br />
          para coleccionar e intercambiar <br />
          <span>Utility NFT’s.</span>
        </h2>
        <div className="wallet_list_details">
          <Wallets
            onClick={ButtonClickModal}
            imgLogo={logoMetamask}
            nameWallet="Metamask"
          />

          <Wallets
            onClick={ButtonClickModal}
            imgLogo={logoCoinbase}
            nameWallet="Coinbase"
          />

          <Wallets
            onClick={ButtonClickModal}
            imgLogo={walletConect}
            nameWallet="WalletConect"
          />
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className="wallet_list_btn"
        >
          {showDiv ? "Ver menos" : "Ver más"}{" "}
          <img src={arrowRight} alt="flecha" />
        </button>

        {showDiv && (
          <div className="wallet_list_extra">
            <Wallets
              onClick={ButtonClickModal}
              imgLogo={logoPhantom}
              nameWallet="Phatom"
            />
            <Wallets
              onClick={ButtonClickModal}
              imgLogo={logoPortis}
              nameWallet="Portis"
            />
          </div>
        )}

        <div className="wallet_container_btn">
        <Link to="/colecciones">
          <button>
            <img src={arrowRight} alt="flecha" />
          </button>
          </Link>
        </div>
      </div>
      {showModal && (
        <div className="wallet_modal">
          <div className="wallet_modal_element">
            <div className="wallet_modal_logo">
              <img src={logo} alt="logo" />
              <h3>Inhands</h3>
            </div>
            <p>
              Al conectar tu billetera y usar Inhands, <br /> estás de acuerdo
              con nuestros
              <span>
                Términos de <br /> Servicio y Politica de Privacidad
              </span>
            </p>
            <Link to="/whitelist">
              <button className="wallet_modal_btn">
                Aceptar y registrarme <img src={arrowRight} alt="flecha" />
              </button>
            </Link>

            <button
              className="wallet_modal_btnClose"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Wallet;
