import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import Product from "./components/products/products";
import Header from "./components/header/header";

function App() {
  const [count, setCount] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);

  function showUp() {
    setCount((prev) => !prev);
  }
  function background() {
    setBackgroundColor((prev) => !prev);
  }

  return (
    <>
      <div className={backgroundColor ? "dark" : "light"}>
        <Header />
        <button style={{ marginTop: "85px" }} onClick={showUp}>
          click
        </button>
        <div
          onClick={background}
          className={backgroundColor ? "dark" : "light"}
        >
          {backgroundColor ? "light" : "dark"}
        </div>
        <main>{count ? <Product event={backgroundColor} /> : ""}</main>
      </div>
    </>
  );
}

export default App;
