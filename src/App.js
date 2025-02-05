import React, { useRef, useState } from "react";
import Header from "./componentes/Header/Header";
import Menu from "./componentes/Menu/Menu";
import Main from "./componentes/Main/Main";
import './App.css';
import './Vars.css';

function App() {

  const [telaAtiva, setTelaAtiva] = useState("inicio");
  const [generoSelecionado, setGeneroSelecionado] = useState(null);
  const inputBuscaRef = useRef(null);

  return (
    <>
      <Header ref={inputBuscaRef} />

      <Menu 
      setTelaAtiva={setTelaAtiva}
      setGeneroSelecionado={setGeneroSelecionado} 
      inputBuscaRef={inputBuscaRef} />
      
      <Main generoSelecionado={generoSelecionado} />
    </>
  );
}

export default App;
