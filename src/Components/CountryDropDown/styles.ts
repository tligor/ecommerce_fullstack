import styled from "styled-components";

export const Label = styled.span`
    font-size: 12px;
    text-transform: capitalize;
    color: rgba(0,0,0,0.4);
    line-height: 16px;
`

export const Country = styled.span`
    font-size: 14px;
    text-transform: capitalize;
    color: #233a95;
    font-weight: 700;
    line-height: 16px;
`

export const CountryDropDownS = styled.div`


.ml-auto > svg{
    opacity: .7;
}


`

export const ModalLanguage = styled.div`
padding: 25px;
position: relative;

.close_{
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    svg{
        font-size: 22px;
    }
}
`

export const HeaderSearch = styled.div`
        width: 100%;
        height: 50px;
        background: #f3f4f7;
        padding: 5px;
        position: relative;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,.1);

        input{
            background: transparent;
            outline: none;
            font-size: 18px;
            color: rgba(0,0,0,.7);
            width: 100%;
            height: 40px;
            border: 0px;
            padding: 0px 20px;

            &::-webkit-input-placeholder{
                color: rgba(0,0,0,.6);
            }
        }

        button{
            position: absolute;
            top: 5px;
            right: 10px;
            z-index: 100;
            min-width: 40px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            color: #000;


            svg{
                font-size: 25px;
                opacity: .8;
            }
        }
`

export const ListaRegioes = styled.ul`
    margin-bottom: 0px;
    max-height: 400px;
    overflow-y: scroll;

    li{
        width: 100%;
        list-style: none;
    }
    button{
        width: 100%;
        text-transform: capitalize;
        color: #000;
        justify-content: flex-start;
        padding: 10px 20px;
    }

    ::-webkit-scrollbar{
        width: 8px;
        height: 8px;

        &-thumb{
            background: ccc;
        }
        &-track{
            background: transparent;
        }
    }
`