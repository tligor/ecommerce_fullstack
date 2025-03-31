import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const myContext = createContext();

function App() {
  const [countryList, setcountryList] = useState([]);
  const [regiaoSelecionada, setregiaoSelecionada] = useState("");

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setcountryList(res.data.data);
    });
  };

  const values = {
    countryList,
    setregiaoSelecionada,
    regiaoSelecionada,
  };

  return (
    <BrowserRouter>
      <myContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { myContext };
