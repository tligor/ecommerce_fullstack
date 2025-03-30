import {
  Label,
  Country,
  CountryDropDownS,
  ModalLanguage,
  ListaRegioes,
} from "./styles.ts";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { HeaderSearch } from "./styles.ts";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <CountryDropDownS>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <Label className="label">Sua localização</Label>
          <Country className="name">Brasil</Country>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setisOpenModal(false)}
        TransitionComponent={Transition}
      >
        <ModalLanguage>
          <h4 className="mb-0">Escolha sua região</h4>
          <p>Insira seu endereço para calcular o frete rápidamente</p>
          <Button className="close_" onClick={() => setisOpenModal(false)}>
            <MdClose />
          </Button>
          <HeaderSearch className="">
            <input type="text" placeholder="Busque sua região" />
            <Button>
              <IoIosSearch />
            </Button>
          </HeaderSearch>
        </ModalLanguage>
        <ListaRegioes className="mt-3">
          <li>
            <Button onClick={() => setisOpenModal(false)}>Brasil</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Portugal</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Argentina</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>
              Estados Unidos
            </Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Paraguay</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Colômbia</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Uruguai</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Chile</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>México</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Espanha</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>China</Button>
          </li>
        </ListaRegioes>
      </Dialog>
    </CountryDropDownS>
  );
};

export default CountryDropDown;
