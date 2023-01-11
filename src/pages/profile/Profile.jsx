import React from "react";
import "./Profile.css";
import Navbar from "../../components/navbar/Navbar";

import imgprofile from "../../assets/images/landing/profile.jpg";
import iconMenu from "../../assets/icons/menuPoints.png";
import iconPosition from "../../assets/icons/position.png";
import iconCopy from "../../assets/icons/copy.svg";
import iconSetting from "../../assets/icons/settings.svg";
import iconBell from "../../assets/icons/bell.svg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile-col1">
          <div className="profile-col1-details">
            <img src={imgprofile} alt="img perfil" />
            <p>
              Enefeti Jiver <span>@enjiver</span>
            </p>
            <button className="profile-col1-btn">
              <img src={iconMenu} alt="icon menu" />
            </button>
          </div>
          <div className="profile-col1-ubication">
            <img src={iconPosition} alt="icono de position" />
            <p>Colombia</p>
          </div>
        </div>
        <div className="profile-col2">
          <div className="profile-col2-details">
            <p>
              0 <span>Seguidores</span>{" "}
            </p>
            <hr />
            <p>
              0 <span>Siguiendo</span>{" "}
            </p>
          </div>
          <button>
            {" "}
            Compartir perfil <img src={iconCopy} alt="iconCopy" />
          </button>
        </div>
      </div>
        <div className="profile-description">
          <div className="profile-description-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="profile-description-icon">
            <div className="profile-description-icon-img">

            <img src={iconSetting} alt="icono" />
            <img src={iconBell} alt="icono" />
            </div>
          </div>
        </div>

        <div className="profile-menu">
        <div className="utility__list">
                <ul>
                    <div className="utility_allList">

                    <li>
                        <p >COLECCIONADOS</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p>FAVORITOS</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p>MOVIMIENTOS</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p>WALLET</p>
                    </li>
                    </div>
                    <div className="utility_searchProfile">

                    <input type="text" placeholder="Busca Utility NFT’s"></input>
                    </div>
                </ul>
                <hr />
            </div>
        </div>

        <div className="profile-spaceNft">
            <h3>aún no tienes nft’s coleccionados</h3>
            <button>Explorar </button>
        </div>
    </>
  );
};

export default Profile;
