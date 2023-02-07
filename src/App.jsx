import { useState } from "react";
import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";
import confetti from "canvas-confetti";
function App() {
  const [valor, setValor] = useState(0);
  const [background, setBackground] = useState(" #339CFF");
  const sumar = (valorBillete) => {
    if (valor + valorBillete > 0) {
      confetti({
        particleCount: 1000,
        startVelocity: 30,
        angle: 90,
        spread: 360,
        origin: { x: 0.5, y: 0.4 },
        zIndex: 999,
      });
      setValor(valor + valorBillete);
    }
  };
  const res = () => {
    setValor(0);
  };
  const restar = (valorBillete) => {
    if (valor - valorBillete >= 0) {
      setBackground("red");
      setValor(valor - valorBillete);
      setTimeout(() => {
        setBackground(" #339CFF ");
      }, 1500);
    } else {
      alert("El valor que desea retirar es mayor al saldo disponible");
    }
  };

  return (
    <div
      style={{ background: background, height: "100vh",width:"100%", overflow:'scroll' }}
      className="App"
    >
      <div
        style={{ padding: "0 20px", width: "100%" }}
        className={s.operaciones}
      >
        <div>
        <MenuList operacion={sumar} />
        </div>
        <div className={s.contador}>
          <h1 className={s.title}>AHORROS</h1>
          <h2>{valor}</h2>
          <div>
            <img
              className={s.img}
              src="https://media.istockphoto.com/id/1446891350/es/foto/empresario-mano-poniendo-moneda-a-hucha-rosa-para-dep%C3%B3sito-bancario-de-inversi%C3%B3n-jubilaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=4XH25nDE7NI_AFnTP9obzEQVvtac0xoAeic7nVfhFRw="
              alt=""
            />
          </div>
          <br />

          <button className={s.button} onClick={res}>
            Vaciar Billetera
          </button>
        </div>
        <div>
        <MenuList operacion={restar} />
      </div>
      </div>
    </div>
  );
}

export default App;
