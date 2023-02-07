import MenuListItem from "../MenuListItem/MenuListItem";
import { DENOMINATION } from "./Arr";
import s from "./style.module.css";

const MenuList = ({ operacion }) => {
  return (
    <div className={s.container}>
      {DENOMINATION.map((billetes) => (
        <div>
          <MenuListItem
            key={billetes.id}
            valorBillete={billetes.denominacion}
            operacion={operacion}
            img={billetes.img}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuList;
