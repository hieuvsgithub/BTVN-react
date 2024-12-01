/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./DashBoardPage.module.scss";
import logo from "../../../img/LOGO.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import ProductItem from "./ProductItem";
import ProductsList from "./ProductsList";

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
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashBoardPage;
