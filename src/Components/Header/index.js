import {
  Anuncio,
  HeaderWrapper,
  HeaderStl,
  LogoLink,
  SeletorCountry,
  HeaderSearch,
  HeaderUsuario,
  HeaderCarrinho,
  Contador,
} from "./styles.ts";
import logo from "../../assets/images/logo.png";
import CountryDropDown from "../CountryDropDown/index.js";
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="top-strip">
        <div className="container">
          <Anuncio>
            Devido a epidemia de <b>COVID 19</b>, nossas entregas podem demorar
            mais que o normal
          </Anuncio>
        </div>
      </div>

      <HeaderStl>
        <div className="container">
          <div className="row">
            <div className="logoWrapper col-sm-2 align-items-center">
              <LogoLink to={"/"}>
                <img src={logo} alt="logo" />
              </LogoLink>
            </div>
            <SeletorCountry className="col-sm-10 d-flex align-items-center">
              <CountryDropDown />

              {/*Busca do Header começa aqui*/}

              <HeaderSearch className="ml-3 mr-3">
                <input type="text" placeholder="Busque produtos..." />
                <Button>
                  <IoIosSearch />
                </Button>
              </HeaderSearch>

              {/*Busca do Header termina aqui*/}

              <HeaderUsuario className="d-flex align-items-center ml-auto">
                <Button className="circle mr-3">
                  <FiUser />
                </Button>
                <HeaderCarrinho className="ml-auto">
                  <span>29,99</span>
                  <div className="position-relative ml-2">
                    <Button className="circle">
                      <IoBagOutline />
                    </Button>
                    <Contador>
                      <span>1</span>
                    </Contador>
                  </div>
                </HeaderCarrinho>
              </HeaderUsuario>
            </SeletorCountry>
          </div>
        </div>
      </HeaderStl>
    </HeaderWrapper>
  );
};

export default Header;
