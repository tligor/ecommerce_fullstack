import {Anuncio, HeaderWrapper, HeaderStl, LogoLink, BotaoCountry} from './styles.ts';
import logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button'

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="top-strip">
                <div className="container">
                    <Anuncio>
                        Devido a epidemia de <b>COVID 19</b>, nossas entregas podem demorar mais que o normal
                    </Anuncio>
                </div>
            </div>

            <HeaderStl>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper col-sm-2 align-items-center'>
                            <LogoLink to={'/'}>
                                <img src={logo} alt="logo" />
                            </LogoLink>
                        </div>
                        <BotaoCountry className='col-sm-10 d-flex align-items-center'>
                            <Button className='countryDrop'>
                                Sua localização
                            </Button>
                            
                        </BotaoCountry>
                    </div>
                </div>
            </HeaderStl>
        </HeaderWrapper>
    );
};

export default Header;