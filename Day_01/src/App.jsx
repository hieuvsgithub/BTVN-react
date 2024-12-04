import { Routes, Route } from "react-router-dom";
// import DashBoardPage from "./pages/admin/DashBoardPage/DashBoardPage";
import ProductsList from "./components/layoutAdmin/ProductsList";
import { useEffect } from "react";
import { useState } from "react";
import FormProductAdd from "./pages/admin/FormProductAdd";
import { getAll } from "./pages/admin/axios/index";
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import Products from "./components/layoutUser/Products";
import LayoutUser from "./components/layoutUser/LayoutUser";
import LayoutAdmin from "./components/layoutAdmin/LayoutAdmin";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [products, setProducts] = useState([]);
  const [stateProducts, setStateProducts] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await getAll("/products");

      setProducts(response);
    };
    fetch();
  }, [stateProducts]);

  return (
    <>
      <Routes>
        {/* Page Users */}
        <Route path="/" element={<LayoutUser />}>
          <Route path="/" element={<Products />} />
        </Route>
        {/* Page Admin */}
        <Route path="/admin" element={<LayoutAdmin />}>
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
        {/* Page login /register */}
        <Route path="/user">
          <Route path="login" element={<FormLogin />} />
          <Route path="register" element={<FormRegister />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
