import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4.5rem 21.5rem 12.8rem;

    form {
        display: grid;
        grid-template-columns: 50fr 50fr;
        gap: 3rem;
    }

    form .inputs label{
        display: block;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 0.9rem;
        line-height: 18px;

        padding-bottom: 4px;
    }

    form input {
        width: 17.5rem;
        height: 2.5rem;

        border: 1px solid #424242;
        border-radius: 0;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 24px;

        padding: 0.5rem 0 0.5rem 0.5rem;

        margin-bottom: 2rem;
    }

    Button {
        margin: 2rem 0 0 27rem;
    }

`;

export const Title = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 22rem;
    margin-bottom: 54px;

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 36px;

        padding-left: 1.5rem;
    }
`; 