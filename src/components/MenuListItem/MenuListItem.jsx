import { useState } from "react";
import s from "./styleMenu.module.css";

const MenuListItem = (props) => {
  return (
    <div
      onClick={() => {
        props.operacion(props.valorBillete);
      }}
    >
      <img
        className={s.img}
        width="220px"
        src={`/logo-billetes/${props.img}`}
        alt=""
      />
    </div>
  );
};

export default MenuListItem;
