import styled from 'styled-components';

export const ContainerModalExcluirNaver = styled.div`
    width: 100%;
    height: 14.5rem;
    background: #fff;
    max-width: 37rem;

    .box {
        padding: 2rem ;

        font-family: Montserrat;
        line-height: 36px;
        color: var(--black);


    }

    .box h1 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 16px;
    }

    .box p {
        font-weight: normal;
        font-size: 1rem;
        margin-bottom: 40px;
    }

    .buttons {
        padding-left: 9.5rem;
    }

    .buttons #cancelar {
        background: #fff;
        margin-right: 1.5rem;
        border: 1px solid var(--black);
        color: var(--black);
    }

    .buttons #excluir {
        border: 0;
    }
`;