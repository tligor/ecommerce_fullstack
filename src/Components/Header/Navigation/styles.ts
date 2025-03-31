import styled from "styled-components";

export const NavMenu = styled.nav`


.btnCategorias{
    background: #2bbef9;
    padding: 10px 15px;
    border-radius: 30px;
    align-items: center;

    .ioiosmenu{
        font-size: 20px;
    }

    .Fangledown{
        font-size: 15px;
    }

    span{
        color: #fff;
        font-weight: 600;
    }
    svg{
        
        }
}
`

export const NavMenuBtn = styled.div`
    max-width: 20%;
    flex: 0 0 20%;

`

export const NavMenuList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 80%;
    flex: 0 0 80%;

    ul{
        margin-bottom: 0px;


        li{

            a{
                text-decoration: none;
                
                button{
                font-size: 15px;
                font-weight: 500;
                text-align: none;
                color: rgba(0,0,0,.8);
                text-transform: uppercase;
                display: flex;
                align-items: center;
                padding: 8px 15px;
                transition: all .2s ease-in-out;
                text-decoration: none;
                border-radius: 25px;

                &:hover{
                    background: #f0faff;
                    color: #2bbef9;
                }

                svg{
                    font-size: 20px;
                }
            }
        } 
        }
    }
    
`