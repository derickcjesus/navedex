import {HeaderStyle} from './styles';
import logo from '../../assets/logo.svg';
 
export function Header() {
    return (
        <HeaderStyle>
            <img src={logo} alt="logo nave.rs"/>

            <a href="#">Sair</a>
        </HeaderStyle>
    );
}