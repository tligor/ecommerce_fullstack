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
    padding: 10px 0;

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

export const BotaoCountry = styled.div`

    .countryDrop{
        min-width: 150px;
        width: 150px;
        height: 80px;
    }
`
