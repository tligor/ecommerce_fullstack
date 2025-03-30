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
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Roupas</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Eletrônicos</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Padaria</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Mercado</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Redes sociais</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Fale conosco</Link>
              </li>
            </ul>
          </NavMenuList>
        </div>
      </div>
    </NavMenu>
  );
};

export default Navigation;
