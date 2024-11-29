/* eslint-disable react/prop-types */
import styles from "./DashBoardPage.module.scss";
import logo from "../../../img/LOGO.png";
import { NavLink } from "react-router-dom";

function ProductItem({ product, updateProduct, datas }) {
  console.log(product.id);
  async function deleteProduct() {
    const result = confirm("ban co muon xoa sp nay ko");
    if (result) {
      try {
        const res = await fetch(
          `http://localhost:3000/products/${product.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.ok) {
          updateProduct(datas.filter((data) => data.id !== product.id));
        }
      } catch (error) {
        console.log(error);
      }
    }

    // if (!result) {
    //   return;
    // } else {
    //   try {
    //     const res = await fetch(`http://localhost:3000/products/${id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     let data = await res.json();
    //     data = data.filter((value) => value.id !== id);
    //     product = data;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  }
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>
        <span
          onClick={() => deleteProduct(product.id)}
          className={styles.btnRemove}
        >
          Remove
        </span>
        <span className={styles.btnUpdate}>Update</span>
      </td>
    </tr>
  );
}
const DashBoardPage = ({ data = [], setProducts }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="Ảnh logo" />
          </div>
        </div>
        <main className={styles.wrapperMain}>
          <div className={styles.sideBar}>
            <ul>
              <li>
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li>
                <NavLink to="/">Danh mục</NavLink>
              </li>
              <li>
                <NavLink to="/">Sản phẩm</NavLink>
              </li>
              <li>
                <NavLink to="/">Đơn hàng</NavLink>
              </li>
              <li>
                <NavLink to="/">Phản hồi</NavLink>
              </li>
              <li>
                <NavLink to="/">Thống kê</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.main}>
            {/* <Outlet /> */}
            <div className={styles.title}>
              <h3>Danh sách sản phẩm</h3>
            </div>
            <div className={styles.wrapperBtnAddProducts}>
              {/* <Link
                to="/admin/FormProduct-add"
                className={styles.btnAddProducts}
              >
                Add new product
              </Link> */}
              {/* <Routes>
                <Route
                  path="/admin/FormProduct-add"
                  element={<FormProduct />}
                />
              </Routes> */}
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
          </div>
        </main>
      </div>
    </>
  );
};

export default DashBoardPage;
