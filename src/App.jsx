import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "../components/Header";
import Main from "../components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
