import { useState, useEffect } from "react";
import { create, getById, updateById } from "./axios";
import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FormProductAdd = ({
  data,
  setProducts,
  stateProduct = null,
  setStateProducts = null,
}) => {
  const { id } = useParams();
  const nav = useNavigate();
  // const initValue = {
  //   title: "",
  //   price: 0,
  //   detail: "",
  // };

  const [productItem, setProductItem] = useState({});

  // cập nhật
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductItem((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const data = await getById("/products", id);
          setProductItem({
            // eslint-disable-next-line react/prop-types
            title: data.title,
            // eslint-disable-next-line react/prop-types
            price: data.price,
            // eslint-disable-next-line react/prop-types
            detail: data.description,
          });
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [id]);
  // gửi đi
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetch = async () => {
      if (id) {
        const data = await updateById("/products", id, productItem);

        setProductItem((prev) => [...prev, productItem]);
        // console.log(productItem);

        confirm("cap nhat thanh cong") && nav("/admin");
      } else {
        const response = await create("/products", productItem);
        // console.log(response);
        setStateProducts(!stateProduct);

        confirm("add thanh cong") && nav("/admin");
      }
    };
    fetch();
  };

  return (
    <div>
      <h3>{id ? "cap nhat" : "them moi"}</h3>
      <form action="">
        <div className="form-group">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            type="text"
            placeholder="title"
            name="title"
            defaultValue={productItem.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" name="title" className="form-label">
            Giá
          </label>
          <input
            type="number"
            placeholder="Giá"
            id="price"
            name="price"
            defaultValue={productItem.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="details" className="form-label">
            Chi tiết
          </label>
          <input
            type="text"
            name="details"
            id="details"
            placeholder="details"
            defaultValue={productItem.detail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button onClick={handleSubmit}>
            {id ? "update" : "add"} product
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProductAdd;
