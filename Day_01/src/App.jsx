import { Routes, Route, Link } from "react-router-dom";
import DashBoardPage from "./pages/admin/DashBoardPage/DashBoardPage";
import ProductsList from "./pages/admin/ProductsList";
import { useEffect } from "react";
import { useState } from "react";
import FormProduct from "./pages/admin/FormProduct-add";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        setProducts(data);
        return data;
      })();
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/admin"
          element={<DashBoardPage data={products} setProducts={setProducts} />}
        >
          <Route
            path="/admin/products"
            element={<ProductsList data={products} />}
          />
          <Route
            path="/admin/FormProduct"
            element={<FormProduct data={products} />}
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
