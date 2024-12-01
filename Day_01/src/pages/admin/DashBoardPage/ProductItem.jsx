/* eslint-disable react/prop-types */
import styles from "./DashBoardPage.module.scss";
import { Link } from "react-router-dom";

function ProductItem({ product, updateProduct, datas }) {
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
        if (res.status === 200) {
          updateProduct(datas.filter((data) => data.id !== product.id));
        }
      } catch (error) {
        console.log(error);
      }
    }
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
        <Link
          to={`/admin/product/update/${product.id}`}
          className={styles.btnUpdate}
        >
          Update
        </Link>
      </td>
    </tr>
  );
}

export default ProductItem;
