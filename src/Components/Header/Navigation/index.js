import { NavMenu, NavMenuBtn, NavMenuList } from "./styles.ts";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <NavMenu>
      <div className="container">
        <div className="row">
          <NavMenuBtn className="col-sm-2">
            <div className="catWrapper">
              <Button
                className="btnCategorias"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="mr-2">
                  <IoIosMenu className="ioiosmenu" />
                </span>
                <span>Categorias</span>
                <span className="ml-2">
                  <FaAngleDown className="Fangledown" />
                </span>
              </Button>
              <div
                className={`sidebarNav ${isOpenSidebarVal ? "open" : "closed"}`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>Moda e vestuário</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Alimentos</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Eletrônicos</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Midia</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Móveis</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Bebidas</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Beleza e saúde</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Roupas</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calçados</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relôgios</Button>
                  </Link>
                  <Link to="/">
                    <Button>Roupas</Button>
                  </Link>
                  <Link to="/">
                    <Button>Calçados</Button>
                  </Link>
                  <Link to="/">
                    <Button>Relôgios</Button>
                  </Link>
                  <Link to="/">
                    <Button>Roupas</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Eletrônicos</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Celulares</Button>
                  </Link>
                  <Link to="/">
                    <Button>Televisão</Button>
                  </Link>
                  <Link to="/">
                    <Button>Computador</Button>
                  </Link>
                  <Link to="/">
                    <Button>Notebooks</Button>
                  </Link>
                  <Link to="/">
                    <Button>Projetor de video</Button>
                  </Link>
                  <Link to="/">
                    <Button>Aparelho de som</Button>
                  </Link>
                  <Link to="/">
                    <Button>Acessórios</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Padaria</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Sopas e caldos</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bolos e tortas</Button>
                  </Link>
                  <Link to="/">
                    <Button>Doces</Button>
                  </Link>
                  <Link to="/">
                    <Button>Bowls</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sucos e refrigerantes</Button>
                  </Link>
                  <Link to="/">
                    <Button>Salgados</Button>
                  </Link>
                  <Link to="/">
                    <Button>Sonho, churros</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Mercado</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Produtos bacola</Button>
                  </Link>
                  <Link to="/">
                    <Button>Importados</Button>
                  </Link>
                  <Link to="/">
                    <Button>Páscoa</Button>
                  </Link>
                  <Link to="/">
                    <Button>Produtos above</Button>
                  </Link>
                  <Link to="/">
                    <Button>Ofertas da semana</Button>
                  </Link>
                  <Link to="/">
                    <Button>Limpeza</Button>
                  </Link>
                  <Link to="/">
                    <Button>Feira</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Redes sociais</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Facebook</Button>
                  </Link>
                  <Link to="/">
                    <Button>Instagram</Button>
                  </Link>
                  <Link to="/">
                    <Button>Youtube</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>Fale conosco</Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Precisa de ajuda?</Button>
                  </Link>
                </div>
              </li>
            </ul>
          </NavMenuList>
        </div>
      </div>
    </NavMenu>
  );
};

export default Navigation;
