// import React from "react";
import styles from "../../scss/components/footer.module.scss";
import "../../scss/grid.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles["news_later"]}>
          <div className={styles.left}>
            <h3>
              Đăng ký <span>Tin tức</span>
            </h3>
            <p>Đăng ký ngay để nhận tin tức mới nhất</p>
          </div>
          {/* <!-- left --> */}
          <div className={styles.right}>
            <input
              className={styles["input-email"]}
              type="text"
              placeholder="Email*"
            />
            <button className={styles["btn-register"]}>Đăng ký</button>
          </div>
        </div>
        {/* <!-- news_later --> */}
        <div className={styles.footer_main}>
          <div className="row">
            <div className="col-3">
              <div className={`${styles.item} ${styles.widget}`}>
                <a href="#" className={styles.logo}>
                  <img src="./imgs/LOGO.png" alt="ảnh Logo" />
                </a>
                <p>
                  Hãy khám phá bộ sưu tập sản phẩm công nghệ của chúng tôi ngay
                  hôm nay và trải nghiệm mua sắm trực tuyến tuyệt vời
                  <span>NTH Smart</span> nhé 33.
                </p>
                <div className={styles.info}>
                  <div className={styles["info-email"]}>
                    <i className="fa-solid fa-location-arrow"></i>
                    nthsmart@gmail.com
                  </div>
                  <div className={styles["info-phone"]}>
                    <i className="fa-solid fa-phone"></i>
                    0966849805
                  </div>
                  {/* <!-- contact-email --> */}
                </div>
                {/* <!-- info --> */}
                <div className={styles["apps-img"]}>
                  <a href="#">
                    <img src="./imgs/app_store.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="./imgs/google_play.png" alt="" />
                  </a>
                </div>
              </div>
              {/* <!-- item --> */}
            </div>
            {/* <!-- col-3 --> */}
            <div className="col-3">
              <div className={`${styles.item} ${styles.category}`}>
                <h4>Danh mục</h4>
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
                    <a href="#">Phụ kiện</a>
                  </li>
                </ul>
              </div>
              {/* <!-- item --> */}
            </div>
            {/* <!-- col-3 --> */}
            <div className="col-3">
              <div className={`${styles.item} ${styles.service}`}>
                <h4>Dịch vụ</h4>
                <ul>
                  <li>
                    <a href="#">Term & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Products Return</a>
                  </li>
                  <li>
                    <a href="#">FAQS</a>
                  </li>
                </ul>
              </div>
              {/* <!-- item --> */}
            </div>
            {/* <!-- col-3 --> */}
            <div className="col-3">
              <div className={`${styles.item} ${styles.link}`}>
                <h4>Liên kết</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Blog & News</a>
                  </li>
                  <li>
                    <a href="#">Our Products</a>
                  </li>
                </ul>
              </div>
              {/* <!-- item --> */}
            </div>
            {/* <!-- col-3 --> */}
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- footer_main --> */}
        <div className={styles["footer_bottom"]}>
          <span>NTH Smart web bán đồ công nghệ hiện đại</span>
        </div>
      </div>
      {/* <!-- container --> */}
    </footer>
  );
};

export default Footer;
