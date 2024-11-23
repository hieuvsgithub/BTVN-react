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
        <Header event={backgroundColor} />
        <button style={{ marginTop: "85px" }} onClick={showUp}>
          {count ? "Ẩn sản phẩm " : "Hiển thị sản phẩm"}
        </button>
        {count ? (
          <div
            onClick={background}
            className={backgroundColor ? "btn-dark" : "btn-light"}
          >
            {backgroundColor ? "light" : "dark"}
          </div>
        ) : (
          ""
        )}
        {count ? <Product event={backgroundColor} /> : ""}
      </div>
    </>
  );
}

export default App;
