import styles from "../../scss/components/header.module.scss";
import logo from "../../img/LOGO.png";
import scrollHeader from "./scrollHeader";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["wrapper-header"]}>
          <div className={styles["header-top"]}>
            <div className={styles["header-top-left"]}>
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i> Xóm 7A Kim Chính
                  Kim Sơn Ninh Bình
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  nthsmart@gmail.com
                </li>
              </ul>
            </div>
            {/* <!-- header-top-left --> */}
            <div className={styles["header-top-right"]}>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-truck"></i> Theo dõi đơn hàng
                  </a>
                </li>
                <li>
                  <a href="#">Chính sách</a>
                </li>
                <li>
                  <a href="#">Thanh toán</a>
                </li>
              </ul>
            </div>
            {/* <!-- header-top-right --> */}
          </div>
          {/* <!-- header-top --> */}
          <div className={styles["header-center"]}>
            <a href="#" className={styles.logo}>
              <img src={logo} alt="Ảnh logo" />
            </a>
            <div className={styles["wrapper-search"]}>
              <input
                type="text"
                className={styles["input-search"]}
                placeholder="Tìm kiếm ..."
              />
              <button className={styles["btn-search"]}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {/* <!-- input-search --> */}
            <div className={styles["wrapper-list-link"]}>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- list-link --> */}
            <div className={styles["wrapper-sidebar"]}>
              <input type="checkbox" id="sidebar" hidden />
              <label htmlFor="sidebar" className={styles.sidebar}>
                <i className="fa-solid fa-bars"></i>
              </label>
              {/* <!-- sidebar --> */}
              <div className={styles["list-nav"]}>
                <label htmlFor="sidebar" className={styles["btn-sidebar"]}>
                  X
                </label>
                <ul>
                  <li>
                    <a href="#">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#">Giới thiệu</a>
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
                  <li>
                    <a href="#">Giỏ hàng</a>
                  </li>
                  <li>
                    <a href="#">Sản phẩm yêu thích</a>
                  </li>
                </ul>
              </div>
              {/* <!-- list-nav --> */}
              <label htmlFor="sidebar" className={styles.coaing}></label>
            </div>
            {/* <!-- wrapper-sidebar --> */}
          </div>
          {/* <!-- header-center --> */}
          <div className={styles["header-bottom"]}>
            <div className={styles["wrapper-category"]}>
              <input
                type="checkbox"
                id={styles.category}
                name="category"
                hidden
              />
              <label className={styles.category} htmlFor="category">
                <i className="fa-solid fa-bars"></i>
                <span> Danh mục</span>
              </label>
              {/* <!-- category --> */}
              <div className={styles["list-category"]}>
                <ul>
                  <li>
                    <a href="#">Loa Bluetooth</a>
                  </li>
                  <li>
                    <a href="#">Máy ảnh</a>
                  </li>
                  <li>
                    <a href="#">Ổ cứng</a>
                  </li>
                  <li>
                    <a href="#">Gia dụng</a>
                  </li>
                  <li>
                    <a href="#">Tivi</a>
                  </li>
                  <li>
                    <a href="#">Máy giặt</a>
                  </li>
                </ul>
              </div>
              {/* <!-- list-category --> */}
            </div>
            {/* <!-- wrapper-category --> */}
            <div className={styles["wrapper-nav"]}>
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
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
            {/* <!-- wrapper-nav --> */}
            <div className={styles["wrapper-icon"]}>
              <div className={styles["icon-like"]}>
                <a href="#">
                  <i className="fa-regular fa-heart"></i>
                  <span className={styles["quantity-product-like"]}>0</span>
                </a>
              </div>
              <div className={styles["icon-shopping-cart"]}>
                <a href="#">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span
                    className={styles["quantity-product-add-shopping-cart"]}
                  >
                    5
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- wrapper-icon --> */}
          </div>
          {/* <!-- header-bottom --> */}
          <div onChange={scrollHeader} className={styles["header-to-scroll"]}>
            <a href="#" className={styles.logo}>
              <img src={logo} alt="Ảnh logo" />
            </a>
            <div className={styles["wrapper-nav"]}>
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
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
            {/* <!-- wrapper-nav --> */}
            <div className={styles["wrapper-icon"]}>
              <div className={styles["icon-like"]}>
                <a href="#">
                  <i className="fa-regular fa-heart"></i>
                  <span className={styles["quantity-product-like"]}>0</span>
                </a>
              </div>
              <div className={styles["icon-shopping-cart"]}>
                <a href="#">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span
                    className={styles["quantity-product-add-shopping-cart"]}
                  >
                    5
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- wrapper-icon --> */}
            <div className={styles["wrapper-sidebar"]}>
              <input type="checkbox" id="sidebar-in-header-to-scroll" hidden />
              <label
                htmlFor="sidebar-in-header-to-scroll"
                className={styles.sidebar}
              >
                <i className="fa-solid fa-bars"></i>
              </label>
              {/* <!-- sidebar --> */}
              <div className={styles["list-nav"]}>
                <label
                  htmlFor="sidebar-in-header-to-scroll"
                  className={styles["btn-sidebar"]}
                >
                  X
                </label>
                <ul>
                  <li>
                    <a href="#">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#">Giới thiệu</a>
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
                  <li>
                    <a href="#">Giỏ hàng</a>
                  </li>
                  <li>
                    <a href="#">Sản phẩm yêu thích</a>
                  </li>
                </ul>
              </div>
              {/* <!-- list-nav --> */}
              <label
                htmlFor="sidebar-in-header-to-scroll"
                className={styles.coaing}
              ></label>
            </div>
            {/* <!-- wrapper-sidebar --> */}
          </div>
          {/* <!-- header-to-scroll --> */}
        </div>
        {/* <!-- wrapper-header --> */}
      </header>
    </>
  );
}

export default Header;
