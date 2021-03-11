import styled from 'styled-components';

export const Main = styled.main`
    margin: 4rem 2.5rem 0;

    .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .box h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 48px;
    }

    Button:hover {
        filter: brightness(0.9);
    }

    .naversGrid {
        display: grid;
        grid-template-columns: 25fr 25fr 25fr 25fr;
        gap: 3rem;

        margin-top: 2rem;
    }

    .naversGrid .grid > img{
        width: 100%;
    }
    
    .naversGrid .grid .name {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 18px;

        margin-top: 1rem;
    }

    .naversGrid .grid .profession {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 24px;

        margin: 4px 0 10px;
    }

    .naversGrid .grid > a {
        margin-right: 1rem;
    }
`;

