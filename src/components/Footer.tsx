import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="rodape">
            <nav className="rodape_links">
                <Link to='/sobre' className="rodape_sobre" >Sobre Nós</Link>
                <Link to='/integrantes' className="rodape_integrantes" >Integrantes</Link>
                <Link to='/privacidade' className="rodape_privacidade" >Política de Privacidade</Link>
            </nav>
            <p className="rodape_copy_right">Todos os direitos reservados © 2024 - Porto.</p>
        </footer>
    )
}