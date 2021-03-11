import {Header} from "../../components/Header/index";
import { Main } from "./style";
import { Button } from "../../components/Button/style";

import juliano from '../../assets/juliano.png';
import gabriel from '../../assets/gabriel.png';
import eduardo from '../../assets/eduardo.png';
import gustavo from '../../assets/gustavo.png';

import edit from '../../assets/edit.svg';
import exclude from '../../assets/delete.svg';

export function Navers() {
    return (
        <>
            <Header />
            <Main>
                <div className="box">
                    <h1>Navers</h1>
                    <Button>Adicionar Naver</Button>
                </div>

                <div className="naversGrid">
                    <div className="grid">
                        <img src={juliano} alt=""/>
                        <p className="name">Juliano Reis</p>
                        <p className="profession">Front-end Developer</p>
                        
                        <a href=""><img src={exclude} alt="exclude"/></a>
                        <a href=""><img src={edit} alt="edit"/></a>
                    </div>
                    <div className="grid">
                        <img src={gabriel} alt=""/>
                        <p className="name">Gabriel do Couto</p>
                        <p className="profession">Front-end Developer</p>
                        
                        <a href=""><img src={exclude} alt="exclude"/></a>
                        <a href=""><img src={edit} alt="edit"/></a>
                    </div>
                    <div className="grid">
                        <img src={eduardo} alt=""/>
                        <p className="name">Eduardo Bittencourt</p>
                        <p className="profession">Front-end Developer</p>
                        
                        <a href=""><img src={exclude} alt="exclude"/></a>
                        <a href=""><img src={edit} alt="edit"/></a>
                    </div>
                    <div className="grid">
                        <img src={gustavo} alt=""/>
                        <p className="name">Gustavo Pinho</p>
                        <p className="profession">Technology Manager</p>
                        
                        <a href=""><img src={exclude} alt="exclude"/></a>
                        <a href=""><img src={edit} alt="edit"/></a>
                    </div>
                </div>
            </Main>
        </>
    );
}