import { Header } from "../../components/Header";
import { Button } from "../../components/Button/style";
import { Container, Title } from "./style";

import back from "../../assets/back.svg";

export function AddNavers() {
  return (
    <>
      <Header />

      <Container>
        <Title>
          <span>
            <img src={back} alt="back" />
          </span>
          <h1>Adicionar Navers</h1>
        </Title>

        <form action="">
          <div className="column-1">
            <div className="inputs">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" placeholder="Nome" />
            </div>
            <div className="inputs">
              <label htmlFor="age">Idade</label>
              <input type="text" name="age" id="age" placeholder="Idade" />
            </div>
            <div className="inputs">
              <label htmlFor="projects">Projetos que já participou</label>
              <input
                type="text"
                name="projects"
                id="projects"
                placeholder="Projetos que já participou"
              />
            </div>
          </div>
          <div className="column-2">
            <div className="inputs">
              <label htmlFor="office">Cargo</label>
              <input
                type="text"
                name="office"
                id="office"
                placeholder="Cargo"
              />
            </div>
            <div className="inputs">
              <label htmlFor="waiting-time">Tempo de espera</label>
              <input
                type="text"
                name="waiting-time"
                id="waiting-time"
                placeholder="Tempo de espera"
              />
            </div>
            <div className="inputs">
              <label htmlFor="url">URL da foto do Naver</label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="URL da foto do Naver"
              />
            </div>
          </div>
        </form>
        <Button type="submit">Salvar</Button>
      </Container>
    </>
  );
}
