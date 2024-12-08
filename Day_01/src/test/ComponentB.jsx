// import React from "react";
import { useContext } from "react";
import { ProductContext } from "../App";

const ComponentB = () => {
  const value = useContext(ProductContext);
  console.log(value);
  return <div>ComponentB</div>;
};

export default ComponentB;
