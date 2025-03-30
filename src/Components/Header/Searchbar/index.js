import { HeaderSearch } from "./styles.ts";
import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";

const Searchbar = () => {
  return (
    <HeaderSearch className="ml-3 mr-3">
      <input type="text" placeholder="Busque produtos..." />
      <Button>
        <IoIosSearch />
      </Button>
    </HeaderSearch>
  );
};

export default Searchbar;
