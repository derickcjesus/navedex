import { Overlay } from "../../styles/Overlay";
import {ContainerModalNaverExcluido} from "./style";

import close from '../../assets/close.svg';

export function ModalNaverExcluido() {
  return (
    <>
      <Overlay>
        <ContainerModalNaverExcluido>
          <div className="box">
            <h1>Naver excluído</h1>
            <p>Naver excluído com sucesso!</p>
          </div>
          <button>
            <img src={close} alt="fechar" />
          </button>
        </ContainerModalNaverExcluido>
      </Overlay>
    </>
  );
}
