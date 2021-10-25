import styled from 'styled-components';

export const CartHeader = styled.div``;

export const CartContentPage = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  .header_box {
    margin-bottom: 1rem;
    display: flex;
    justify-content: end;
  }
  .list_box {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    //@media screen and (min-width: 480px) {
    //  grid-template-columns: repeat(2, 1fr);
    //}

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
