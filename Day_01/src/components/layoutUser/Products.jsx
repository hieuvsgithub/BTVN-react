import { useEffect, useState } from "react";
import styles from "./products.module.scss";

function Product() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const [url, setUrl] = useState("https://dummyjson.com/products");

  useEffect(() => {
    fetch(`${url}?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setQuantityProduct(data.total);
        setProducts(data.products);
        setPages([]);
      });

    return () => {};
  }, [limit, skip]);

  // hàm sử lý tìm kiếm
  function handleSearch(value) {
    value = value.toLowerCase();
    fetch(`${url}/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setPages([]);
      });
    setPages([]);
  }

  // hàm sử lý nút next
  function next() {
    setSkip((prev) => prev + limit);
    setCurrentPage((prev) => prev + 1);
  }
  // hàm sử lý nút prev
  function prev() {
    setSkip((prev) => prev - limit);
    setCurrentPage((prev) => prev - 1);
  }

  // hàm sử lý bộ chọn hiện số lượng sản phẩm
  function handleLimit(value) {
    if (value === "all") {
      setSkip(0);
      setLimit(0);
    } else {
      setSkip(0);
      setLimit(value);
    }
    // console.log(value);
  }

  // hàm sử lý số lượng các trang
  function handlePage() {
    let numberPage = quantityProduct / limit;
    if (quantityProduct % limit != 0) {
      numberPage = quantityProduct / limit + 1;
    }

    // hàm sử lý hiện sản phẩm khi bấm vào trang
    function clickPage(value) {
      setSkip(value * limit);

      // console.log(value);
      // if (value > currentPage) {
      //   setLimit(limit);
      //   setSkip(currentPage * limit - limit);
      //   setCurrentPage(value);
      // } else if (value < currentPage) {
      //   setSkip(currentPage * limit - limit);
      //   setCurrentPage(value);
      // }
    }

    for (let i = 1; i <= numberPage; i++) {
      pages.push(<li onClick={() => clickPage(i)}>{i}</li>);
    }
    return <ul>{pages}</ul>;
  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.left}>
          <label htmlFor="quantity">Hiển thị:</label>
          <select
            onChange={(e) => {
              handlePage();
              handleLimit(e.target.value);
            }}
            name=""
            id="quantity"
          >
            <option value="10">10 sản phẩm </option>
            <option value="20">20 sản phẩm </option>
            <option value="30">30 sản phẩm </option>
            <option value="all">Tất cả sản phẩm </option>
          </select>
        </div>
        <div className={styles.right}>
          <input
            type="text"
            placeholder="Tìm kiếm ..."
            className={styles.search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {products.map((product) => {
        return (
          <div key={product.id} className={styles.item}>
            <div className={styles.left}>
              <a href="#">
                <img src={product.thumbnail} alt="Ảnh sản phẩm" />
              </a>
            </div>
            <div className={styles.right}>
              <a href="#">
                <h2>
                  {product.title} {product.id}
                </h2>
              </a>
              <p>{product.description}</p>
              <span className={styles.price}>{product.price} $</span>
            </div>
          </div>
        );
      })}
      {limit === "194 " ? (
        ""
      ) : (
        <>
          {skip === 0 ? "" : <button onClick={prev}>prev</button>}
          {skip === 90 || limit === "194" ? (
            ""
          ) : (
            <button onClick={next}>next</button>
          )}
        </>
      )}
      <div className={styles.pages}>{handlePage()}</div>
    </>
  );
}

export default Product;
