import styles from "../header/header.module.scss";
import logo from "../../img/LOGO.png";

function Header() {
  return (
    <>
      <header>
        <a href="#" className={styles.logo}>
          <img src={logo} alt="Ảnh sản phẩm" />
        </a>
        <div className={styles.listNav}>
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Sản phẩm</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div className={styles.shoppingCart}>Giỏ hàng</div>
      </header>
    </>
  );
}

export default Header;
