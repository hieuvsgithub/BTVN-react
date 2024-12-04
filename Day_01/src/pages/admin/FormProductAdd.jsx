/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { create, getById, updateById } from "./axios";
import { data, useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaProduct } from "../../schemas/productSchema";
import styles from "../FormLogin.module.scss";

const FormProductAdd = ({
  data,
  setProducts,
  stateProduct = null,
  setStateProducts = null,
}) => {
  const { id } = useParams();
  const nav = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schemaProduct),
  });

  const [productItem, setProductItem] = useState({});
  const [dis, setDis] = useState(false);

  // khi bấm nút update thì sẽ chạy nào đây
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const data = await getById("/products", id);
          console.log(data);
          setProductItem(data);
          reset(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleAddSubmit = (product) => {
    const fetch = async () => {
      if (id) {
        setDis(true);
        const data = await updateById("/products", id, product);
        console.log(data);
        // setProducts((prev) => [...prev, productItem]);
        reset();
        setStateProducts(!stateProduct);
        confirm("cap nhat thanh cong") && nav("/admin");
        setDis(false);
      } else {
        await create("/products", product);
        console.log(productItem);
        // console.log(response);
        reset();
        setStateProducts(!stateProduct);

        confirm("add thanh cong") && nav("/admin");
      }
    };
    fetch();
  };
  return (
    <div className={styles.wrapper}>
      <h3>{id ? "Cập nhật" : "Thêm mới"}</h3>
      <form onSubmit={handleSubmit(handleAddSubmit)}>
        <div className={styles["form-group"]}>
          <label htmlFor="" className={styles["form-label"]}>
            Title
          </label>
          <input
            className={styles["form-control"]}
            id="title"
            type="text"
            placeholder="title"
            name="title"
            {...register("title", { required: true })}
          />
          {errors.title && <p>{errors.title?.message}</p>}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="" name="price" className={styles["form-label"]}>
            Giá
          </label>
          <input
            className={styles["form-control"]}
            type="text"
            placeholder="Giá"
            id="price"
            name="price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && <p>{errors.price?.message}</p>}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="details" className={styles["form-label"]}>
            Chi tiết
          </label>
          <textarea
            className={styles["form-control"]}
            type="text"
            name="description"
            id="description"
            placeholder="description"
            {...register("description", { required: true })}
          />
        </div>
        <div className={styles["form-group"]}>
          <button disabled={dis} type="submit">
            {id ? "update" : "add"} product
          </button>
        </div>
      </form>
    </div>
  );
};

// FormProductAdd.PropTypes = {
//   data: PropTypes.string,
//   setProducts: PropTypes.array,
//   stateProduct: PropTypes.array | null,
//   setStateProducts: PropTypes.func | null,
// };

export default FormProductAdd;
