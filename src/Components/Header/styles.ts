import { Link } from "react-router-dom";
import styled from "styled-components";


export const Anuncio = styled.p`
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
`

export const HeaderWrapper = styled.div`

    .top-strip{
        padding: 8px 0px;
        background-color: #233a95;
    }
    p{
        color: white;
        font-size: 12px;
        font-weight: 500;
    }
`

export const HeaderStl = styled.div`
    width: 100%;
    height: auto;
    padding: 25px 0;

    .logoWrapper img{
        width: 100%;
    }
    .row{
        display: flex;
        align-items: center;
    }
`

export const LogoLink = styled(Link)`
    display: inline-block;
    transition: opacity 0.3s;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const SeletorCountry = styled.div`

    .countryDrop{
        min-width: 170px;
        width: 170px;
        height: 60px;
        color: #000;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 7px;
        text-align: left;
        justify-content: flex-start;
        padding: 10px 15px;
    }
`


export const HeaderUsuario = styled.div`

    .circle{
        align-items: center;
        justify-content: center;
        min-width: 45px;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,.1);
        color: #000;

        svg{
            font-size: 22px;
        }
    }
`

export const HeaderCarrinho = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    span{
        font-size: 18px;
        color: rgba(0,0,0,.8);
        font-weight: 700;
    }
    button{
        background: #fff1ee;

        svg{
            color: #ea2b0f
        }
    }
`
export const Contador = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -6px;
    right: -4px;
    background: #ea2b0f;
    border-radius: 50%;
    width: 20px;
    height: 20px;

    span{
        color: white;
        font-size: 15px;
    }
`

