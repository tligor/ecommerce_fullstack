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
import { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import React from "react";
import { myContext } from "../../App.js";
import { useContext } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedRegion, setselectedRegion] = useState(null);
  const [listaRegiao, setlistaRegiao] = useState([]);

  const context = useContext(myContext);

  //Seleciona região no modal

  const selectCountry = (index, country) => {
    setselectedRegion(index);
    setisOpenModal(false);
    context.setregiaoSelecionada(country);
  };

  useEffect(() => {
    setlistaRegiao(context.countryList);
  }, []);

  // Pesquisa região
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = listaRegiao.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setlistaRegiao(list);
    } else {
      setlistaRegiao(context.countryList);
    }
  };

  return (
    <CountryDropDownS>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <Label className="label">Sua localização</Label>
          <Country className="name">
            {context.regiaoSelecionada !== ""
              ? context.regiaoSelecionada.length > 10
                ? context.regiaoSelecionada?.substr(0, 10) + "..."
                : context.regiaoSelecionada
              : "Brazil"}
          </Country>
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
            <input
              type="text"
              placeholder="Busque sua região"
              onChange={filterList}
            />
            <Button>
              <IoIosSearch />
            </Button>
          </HeaderSearch>
        </ModalLanguage>
        <ListaRegioes className="mt-3">
          {listaRegiao?.length !== 0 &&
            listaRegiao?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectedRegion === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ListaRegioes>
      </Dialog>
    </CountryDropDownS>
  );
};

export default CountryDropDown;
