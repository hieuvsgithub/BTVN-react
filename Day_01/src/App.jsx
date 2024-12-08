// import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layoutUser/Header";
import AuthProvider from "./contexts/AuthContext";
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import NotFoundPage from "./pages/NotFoundPage";
import ProductProvider from "./contexts/ProductContext";
// import { useContext } from "react";
// import { useContext } from "react";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <Header />
          <Routes>
            {/* Lien quan den Auth */}
            <Route path="login" element={<FormLogin />} />
            <Route path="register" element={<FormRegister />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </>
  );
};

export default App;
