import { Overlay } from "../../styles/Overlay";
import { ContainerModalNaver } from "./style";

import juliano from "../../assets/juliano.png";

import exclude from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import close from "../../assets/close.svg";


export function ModalNaver() {
  return (
    <>
      <Overlay>
        <ContainerModalNaver>
          <img src={juliano} alt="juliano reis" />
          <div className="contents">
            <div className="info">
              <h1>Juliano Reis</h1>
              <p>Front-end Developer</p>

              <h2>Idade</h2>
              <p>Lorem Ipsum</p>

              <h2>Tempo de espera</h2>
              <p>Lorem Ipsum</p>

              <h2>Projetos que já participou</h2>
              <p>Lorem Ipsum</p>
            </div>
            <div className="icons">
                <a href="">
                  <img src={exclude} alt="exclude" />
                </a>
                <a href="">
                  <img src={edit} alt="edit" />
                </a>
              </div>
          </div>
          <button><img src={close} alt="fechar"/></button>
        </ContainerModalNaver>
      </Overlay>
    </>
  );
}
