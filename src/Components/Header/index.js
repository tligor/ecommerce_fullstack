import Anuncio from './styles.ts';

const Header = () => {
    return(
        <>
        <div className="header">
            <div className="top-strip">
                <div className="container">
                    <Anuncio>Devido a epidemia de <b>COVID 19</b>, nossas entregas podem demorar mais que o normal</Anuncio>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;