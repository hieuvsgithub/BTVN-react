// import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { create, getAll } from "./admin/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "../schemas/productSchema";
import styles from "./FormLogin.module.scss";

const FormRegister = () => {
  const nav = useNavigate();
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schemaRegister),
  });

  function onSubmit(data) {
    const checkUser = async () => {
      const datas = await getAll("/users");
      const user = datas.find((item) => item.email === data.email);
      if (user) {
        alert("Tài khoản này đã tồn tại");
      } else {
        await create("/users", data);
        alert("Đăng kí thành công");
        nav("/user/login");
      }
    };
    checkUser();
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h3>Đăng kí</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["form-group"]}>
            <label htmlFor="" className={styles["form-label"]}>
              Name
            </label>
            <input
              className={styles["form-control"]}
              id="name"
              type="text"
              placeholder="name"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && <p>{errors.name?.message}</p>}
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="" name="email" className={styles["form-label"]}>
              Email
            </label>
            <input
              className={styles["form-control"]}
              type="email"
              placeholder="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p>{errors.email?.message}</p>}
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="details" className={styles["form-label"]}>
              Password
            </label>
            <input
              className={styles["form-control"]}
              type="text"
              name="password"
              id="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          <div className={styles["form-group"]}>
            <button type="submit">Đăng kí</button>
            {/* <button type="submit">dang ki</button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
