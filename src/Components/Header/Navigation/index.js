import { NavMenu, NavMenuBtn, NavMenuList } from "./styles.ts";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavMenu>
      <div className="container">
        <div className="row">
          <NavMenuBtn className="col-sm-2">
            <Button className="btnCategorias">
              <span className="mr-2">
                <IoIosMenu className="ioiosmenu" />
              </span>
              <span>Categorias</span>
              <span className="ml-2">
                <FaAngleDown className="Fangledown" />
              </span>
            </Button>
          </NavMenuBtn>
          <NavMenuList className="col-sm-10">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Roupas</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Eletrônicos</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Padaria</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Mercado</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Redes sociais</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Fale conosco</Button>
                </Link>
              </li>
            </ul>
          </NavMenuList>
        </div>
      </div>
    </NavMenu>
  );
};

export default Navigation;
