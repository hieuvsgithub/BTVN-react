import { Routes, Route, Link } from "react-router-dom";
import DashBoardPage from "./pages/admin/DashBoardPage/DashBoardPage";
import ProductsList from "./pages/admin/DashBoardPage/ProductsList";
import { useEffect } from "react";
import { useState } from "react";
import FormProductAdd from "./pages/admin/FormProductAdd";
import { getAll } from "./pages/admin/axios/index";

function App() {
  const [products, setProducts] = useState([]);
  const [stateProducts, setStateProducts] = useState(false);
  // useEffect(() => {
  //   try {
  //     (async () => {
  //       // C1:
  //       // const res = await fetch("http://localhost:3000/products");
  //       // const data = await res.json();
  //       // C2:
  //       // const { data } = await axios.get("http://localhost:3000/products");

  //       // C3:
  //       const { data } = await instance.get(`/products`);
  //       console.log(data);
  //       setProducts(data);
  //     })();
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   return () => {};
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const data = await getAll("/products");
  //     console.log(data);
  //     setProducts(data);
  //   })();

  //   return () => {};
  // }, []);

  useEffect(() => {
    const fetch = async () => {
      const response = await getAll("/products");

      setProducts(response);
    };
    fetch();
  }, [stateProducts]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/admin" element={<DashBoardPage />}>
          <Route
            path="/admin"
            element={<ProductsList data={products} setProducts={setProducts} />}
          />
          <Route
            path="/admin/add_product"
            element={
              <FormProductAdd
                data={products}
                setProducts={setProducts}
                stateProducts={stateProducts}
                setStateProducts={setStateProducts}
              />
            }
          />
          <Route
            path="/admin/product/update/:id"
            element={
              <FormProductAdd data={products} setProducts={setProducts} />
            }
          />
        </Route>
      </Routes>
      <button>
        <Link to="/admin">Click</Link>
      </button>
      {/* <Products /> */}
    </>
  );
}

export default App;
