import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    width: 28rem;
    height: 25.5rem;
    border: 1px solid var(--black);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-bottom: 2.9rem;
    }

    div > input {
        margin-bottom: 2rem;
    }

    p {
        font-size: 0.9rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-style: normal;

        margin-bottom: 4px;
        line-height: 18px;

        color: var(--black);
    }

    input {
        border: 1px solid #424242;
        width: 24rem;
        height: 2.5rem;
        padding: 0.5rem 0 0.5rem 0.5rem;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;

        color: var(--placeholder-text);
    }

    button {
        display: block;
        width: 24rem;
        height: 2.5rem;

        background: var(--black);
        color: #FFF;

        font-family: Montserrat;
        font-weight: 600;
        font-size: 0.9rem;

        transition: filter 0.2s;
    }

    button:hover {
        filter: brightness(0.9);
    }
`;
  
