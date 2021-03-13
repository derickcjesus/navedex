import { Overlay } from "../../styles/Overlay";
import { ContainerModalAdicionaNaver } from "./style";

import close from '../../assets/close.svg';

export function ModalNaverAdicionado() {
  return (
    <>
      <Overlay>
        <ContainerModalAdicionaNaver>
          <div className="box">
            <h1>Naver criado</h1>
            <p>Naver criado com sucesso!</p>
          </div>
          <button>
            <img src={close} alt="fechar" />
          </button>
        </ContainerModalAdicionaNaver>
      </Overlay>
    </>
  );
}
