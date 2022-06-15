import React from "react";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/Header/Navbar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </>
  );
}

export default App;
