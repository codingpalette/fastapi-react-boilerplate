import styled from '@emotion/styled';

export const ImageSection = styled.section`
  max-height: 500px;
  width: 100%;
  height: 100%;

  .content_box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .content_box img {
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .content_box .text_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.35);
    text-align: center;

    strong {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;

export const OurSection = styled.div`
  .content_box {
    .title_text {
      padding-top: 1rem;
      padding-bottom: 2.5rem;
    }

    .list_box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .list_box li {
      padding: 2rem 1rem;
      text-align: center;
      transition: box-shadow 0.3s;
      box-sizing: border-box;
    }

    .list_box li:hover {
      box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 50%);
    }

    .list_box li .icon_box {
    }
    .list_box li .icon_box svg {
      font-size: 40px;
    }

    .list_box li .title {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
      .list_box li {
        width: 33.33%;
      }
    }
  }
`;

export const ShopSection = styled.section`
  .title_text {
    padding-top: 1rem;
    padding-bottom: 2.5rem;
  }

  .item_list_box .link_box {
    text-align: center;
  }
  .item_list_box .link_box a {
    text-decoration: none;
    color: #000;
    opacity: 0.75;
  }
  .item_list_box .link_box a:hover {
    text-decoration: underline;
  }

  .list_box {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  //.list_box li {
  //  width: 33.33%;
  //}

  .list_box li a {
    position: relative;
    display: block;
    padding-bottom: 56.25%;
    overflow: hidden;
  }

  .list_box li img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    display: block;
    width: 100%;
    height: auto;
  }

  .list_box .price_box {
    padding: 1rem;
    box-sizing: border-box;
  }

  .list_box li h4 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
