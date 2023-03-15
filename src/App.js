import "./styles.css";
import React, { Component } from "react";
import Alface from "./imagem/alface.png";
import Laranja from "./imagem/laranja.png";
import Cereja from "./imagem/cereja.png";
import Cenoura from "./imagem/cenoura.png";
import Manga from "./imagem/manga.png";
import Limão from "./imagem/limao.png";
import Beterraba from "./imagem/beterraba.png";
import Tomate from "./imagem/tomate.png";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

class App extends Component {
  state = {
    Hortifruti: [
      { Nome: "Alface", Imagem: `${Alface}` },
      { Nome: "Laranja", Imagem: `${Laranja}` },
      { Nome: "Cereja", Imagem: `${Cereja}` },
      { Nome: "Cenoura", Imagem: `${Cenoura}` },
      { Nome: "Manga", Imagem: `${Manga}` },
      { Nome: "Limão", Imagem: `${Limão}` },
      { Nome: "Beterraba", Imagem: `${Beterraba}` },
      { Nome: "Tomate", Imagem: `${Tomate}` }
    ],
    Carrinho: []

    /*addCarrinho=() => {
      this.setState({
       Carrinho:[{}],)*/
  };
  render() {
    const dragEvents = {
      onDragEnter: (e) => {
        e.preventDefault();
        console.log("onDragEnter");
      },
      onDragLeave: (e) => {
        e.preventDefault();
        console.log("onDragLeave");
      },
      onDragOver: (e) => {
        e.preventDefault();
        console.log("onDragOver");
      },
      onDrop: (e) => {
        e.preventDefault();
        console.log("onDrop");
      }
    };
    return (
      <section className="map">
        <h1 className="title"> Hortifruti </h1>
        <h2 className="subtitle"> Vnw</h2>
        <h3 className="subtitle">Nossos Produtos</h3>
        <div classname="Container">
          <div className="carrinho">
            <div className="Drag" {...dragEvents}>
              <BsCart3 size={65} />
              <p>Arraste o seu produto aqui para colocar no carrinho</p>
            </div>

            <div className="Button">
              <button className="button-plus">
                <BsPlusCircle type="button" size={30} />
              </button>
              <button className="button-minus">
                <BiMinusCircle type="button" size={35} />
              </button>
            </div>
          </div>

          {this.state.Hortifruti.map((item) => (
            <div className="box">
              <img src={item.Imagem} alt={item.Titulo} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default App;
