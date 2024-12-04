/* eslint-disable react/prop-types */
// import React from "react";
import styles from "./LayoutAdmin.module.scss";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductsList = ({ data = [], setProducts }) => {
  return (
    <>
      <div className={styles.title}>
        <h3>Danh sách sản phẩm</h3>
      </div>
      <div className={styles.wrapperBtnAddProducts}>
        <Link to="/admin/add_product" className={styles.btnAddProducts}>
          Add products
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <ProductItem
              product={item}
              key={index}
              updateProduct={setProducts}
              datas={data}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductsList;
