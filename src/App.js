import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />

      <ItemListContainer
        name="HardwareStore©"
        leadName="Blanco Juan Cruz"
        softwareUsed="React"
      />
    </>
  );
}

export default App;
