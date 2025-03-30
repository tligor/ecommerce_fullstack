import { Label, Country, CountryDropDownS } from "./styles.ts";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";

const CountryDropDown = () => {
  return (
    <CountryDropDownS>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <Label className="label">Sua localização</Label>
          <Country className="name">Brasil</Country>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
    </CountryDropDownS>
  );
};

export default CountryDropDown;
