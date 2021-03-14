import React from 'react';
import { ModalNaverAtualizado } from './components/ModalNaverAtualizado';
import { ModalNaverAdicionado } from './components/ModalNaverAdicionado';
import { ModalNaverExcluido } from './components/ModalNaverExcluido';
import { ModalExcluirNaver } from './components/ModalExcluirNaver';

import { ModalNaver } from './components/ModalNaver';
import { AddNavers } from './pages/AddNavers';
import { EditNavers } from './pages/EditNavers';
import { Login } from './pages/Login';
import { Navers } from './pages/Navers';
import { GlobalStyle } from './styles/GlobalStyles';
import { Overlay } from './styles/Overlay';

function App() {
  return (
    <>
    <Navers/>

    <GlobalStyle />
    </>
  );
}

export default App;
