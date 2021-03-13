import { Overlay } from "../../styles/Overlay";
import { ContainerModalNaverAtualizado } from "./style";

import close from '../../assets/close.svg';

export function ModalNaverAtualizado() {
  return (
    <>
      <Overlay>
        <ContainerModalNaverAtualizado>
          <div className="box">
            <h1>Naver atualizado</h1>
            <p>Naver atualizado com sucesso!</p>
          </div>
          <button>
            <img src={close} alt="fechar" />
          </button>
        </ContainerModalNaverAtualizado>
      </Overlay>
    </>
  );
}
