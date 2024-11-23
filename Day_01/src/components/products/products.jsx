import { useState } from "react";
import { datas } from "../../datas/data";
import styles from "./products.module.scss";

function Product() {
  const [seeMores, setSeeMore] = useState(10);

  function seeMore(props) {
    setSeeMore((prev) => prev + 10);
  }
  const loadData = (data) => {
    return data.slice(0, seeMores);
  };

  return (
    <>
      {loadData(datas).map((item) => (
        <div key={item.sku} className={styles.item}>
          <div className={styles.left}>
            <a href="#" className="img-products">
              <img src={item.image} alt="Ảnh sản phẩm" />
            </a>
          </div>
          <div className={styles.right}>
            <div className={styles.information}>
              <a className={styles.title} href="#">
                <h2>{item.name}</h2>
              </a>
              <p>Mô tả: {item.short_description}</p>
              <div className={styles.row}>
                <span className={styles.sku} title="Mã sản phẩm">
                  {item.sku}
                </span>
                <span className={styles.stock}>cổ phần: {item.stock}</span>
              </div>
              <p className={styles.materials} title="Nguyên vật liệu">
                {item.materials}
              </p>
              <p className={styles.instruction} title="Hướng dẫn">
                {item.instruction}
              </p>

              <div className={styles.price}> {item.final_price} vnd</div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.seeMores} onClick={seeMore}>
        {seeMores >= datas.length ? "" : "See More"}
      </div>
    </>
  );
}

export default Product;
