import { Container, Box } from "./styles";

import logo from '../../assets/logo.svg';

export function Login() {
  return (
    <Container>
      <Box>
        <img src={logo} alt="logo nave.rs" />

        <div>
          <p>E-mail</p>
          <input type="email" name="email" placeholder="E-mail" id="" />

          <p>Senha</p>
          <input type="password" name="password" placeholder="Senha" id="" />

          <button type="submit">Entrar</button>
        </div>
      </Box>
    </Container>
  );
}
