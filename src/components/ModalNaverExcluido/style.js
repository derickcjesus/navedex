import styled from 'styled-components';

export const ContainerModalNaverExcluido = styled.div`
    width: 100%;
    height: 10rem;
    background: #fff;
    max-width: 37rem;
    position: relative;

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
    }

    button {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: none;
        border: 0;
    }
`;