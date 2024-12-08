/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { createContext } from "react";

const initialState = {
  products: [],
  loading: false,
};

const setProducts = (data) => {
  return {
    type: "SET_PRODUCTS",
    payload: data,
  };
};

const addProducts = (payload) => {
  return {
    type: "ADD_PRODUCTS",
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

export const ProductContext = createContext();

// const products = [{ id: 1, title: "tivi", price: 1000 }];

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(1);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        dispatch(setProducts(data.products));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
