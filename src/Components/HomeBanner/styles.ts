import styled from "styled-components";

export const BannerContainer = styled.section`
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 500px;

  *{
    outline: none;
  }

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    height: 100%; /* Ocupa toda altura do container */
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%; /* Altura completa */
  }

  .slick-track {
    display: flex;
    height: 100%; /* Altura completa */
  }

  .slick-slide {
    float: none;
    height: 100%;
    min-height: 1px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    position: relative;
    
    & > div {
      width: 100%;
      height: 100%;
      display: flex !important;
      justify-content: center;
      align-items: center;
    }
  }

  .slick-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  /* Restante do seu CSS permanece igual */
  .slick-dots {
    /* ... mantém seus estilos atuais ... */
  }

  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #444444;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    font-size: 0;
    transition: all 0.3s ease;
    color: white;
    font-weight: bold;

    &:hover {
      background: #333333;
    }

    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 20px;
    }

    &.slick-next {
    right: 25px;
    
    &::before {
          }
  }
    &.slick-prev {
    left: 25px;
    
    &::before {
    }
  }
  }
`