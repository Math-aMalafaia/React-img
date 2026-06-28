import "./Header.css";

// Componete responsavel pelo cabeçalho

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_logo">
                    <h1>PysMind</h1>
                </div>

                <nav className="header_nav">
                    <ul className="header_menu">
                        <li className="header_item">
                            <a href="#inicio">Início</a>
                        </li>
                        <li className="header_item">
                            <a href="#historia">Hitorioa</a>
                        </li>
                        <li className="header_item">
                            <a href="#psicologia">Psicologia</a>
                        </li>
                        <li className="header_item">
                            <a href="#contato">Contatos</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;