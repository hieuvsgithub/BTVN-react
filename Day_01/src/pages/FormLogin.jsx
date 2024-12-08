// import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAll } from "./admin/axios";
import { schemaLogin } from "../schemas/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./FormLogin.module.scss";

const FormLogin = () => {
  const nav = useNavigate();
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schemaLogin),
  });

  function onSubmit(data) {
    const checkUser = async () => {
      const datasUser = await getAll("/users");
      // console.log(datasUser);
      if (data.email === "trunghieu@gmail") {
        nav("/admin");
      } else {
        // console.log(datasUser);
        const idlogin = datasUser.find((item) => item.email === data.email);
        console.log(idlogin);
        if (idlogin) {
          nav("/");
        } else {
          alert("taif khaonr hoặc mật khẩu ko đúng");
        }
      }
    };
    checkUser();
  }
  return (
    <>
      <div className={styles.wrapper}>
        <h3>Đăng nhập</h3>
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
              type="password"
              name="password"
              id="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          <div className={styles["form-group"]}>
            <button type="submit">Đăng Nhập</button>
            {/* <button type="submit">dang ki</button> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
