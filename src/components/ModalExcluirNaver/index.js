import { Overlay } from "../../styles/Overlay";
import { Button } from "../Button/style";
import { ContainerModalExcluirNaver } from "./style";

export function ModalExcluirNaver() {
    return (
        <>
            <Overlay>
                <ContainerModalExcluirNaver>
                    <div className="box">
                        <h1>Excluir Naver</h1>
                        <p>Tem certeza que deseja excluir este Naver?</p>
                        <div className="buttons">
                            <Button id="cancelar">Cancelar</Button>
                            <Button id="excluir">Excluir</Button>
                        </div>
                    </div>
                </ContainerModalExcluirNaver>
            </Overlay>
        </>
    );
}