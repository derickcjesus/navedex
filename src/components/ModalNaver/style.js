import styled from 'styled-components';

export const ContainerModalNaver = styled.div`
    width: 100%;
    height: 31.5rem;
    background: #fff;
    max-width: 62rem;
    position: relative;

    display: flex;

    .contents {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding: 2rem 0 1.7rem 1.9rem;

    }

    .contents .info h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 36px;
        color: #000;
        margin-bottom: 8px;
    }

    .contents .info h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        color: var(--black);
        line-height: 24px;
        margin-bottom: 4px;
    }

    .contents .info p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 24px;
        color: var(--black);
        margin-bottom: 24px;
    }

    .contents .icons > a {
        margin-right: 1rem;
    }

    button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: 0;
    }
`;