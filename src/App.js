import React from "react";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Header/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
