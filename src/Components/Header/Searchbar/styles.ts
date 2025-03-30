import styled from "styled-components";


export const HeaderSearch = styled.div`
        width: 60%;
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
            right: 15px;
            z-index: 100;
            min-width: 40px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            color: #000;


            svg{
                font-size: 25px;
            }
        }
`
