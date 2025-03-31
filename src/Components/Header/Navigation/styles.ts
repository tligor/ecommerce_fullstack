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

    .catWrapper{
        position: relative;

        .sidebarNav{
            width: 100%;
            height: 0px;
            opacity: 0;
            background: #fff;
            position: absolute;
            top: 136%;
            left: 0px;
            border: 1px solid rgba(0,0,0,.1);
            padding: 15px 0px;
            transition: all .2s;
            visibility: hidden;
            overflow: hidden;
            z-index: 100;

            &.open{
                height: auto;
                opacity: 1;
                visibility: inherit;
            }

            ul{
                padding: 0;
            
                li{
                width: 100%;
                list-style: none;
                padding: 0px 15px;

                button{
                    color: #000;
                    width: 100%;
                    justify-content: flex-start;
                    text-transform: initial;

                    &:hover{
                        background: transparent;
                    }

                }
            }
            }

            
            
        }
    }

    

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
            position: relative;
            padding-bottom: 20px;
            
            &:hover .submenu{
                opacity: 1;
                visibility: inherit;
                top: 100%;
            }
            .submenu{
                position: absolute;
                top: 150%;
                left: 0px;
                min-width: 200px;
                background: #fff;
                opacity: 0;
                visibility: hidden;
                transition: all .2s ease-in-out;
                z-index: 100;

                a{
                    display: block;
                    width: 100%;

                    button{
                        width: 100%;
                        justify-content: flex-start;
                        border-radius: 0px;
                        text-transform: initial;
                        font-weight: 600;

                        &:hover{
                            background: #f1f1f1;
                        }
                    }
                }
            }
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