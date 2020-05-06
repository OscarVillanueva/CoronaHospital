import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: end;
    }
`

export const ListRow = styled.div`
    width: 90%;
    margin: 2rem auto;
`

export const SpaceBetweenRow = styled.div`
    padding: 1rem;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`
export const SpaceArroundRow = styled.div`
    padding: 1rem;

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

export const Grid = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
    }    
`