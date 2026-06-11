import "./Header.css";

// Componete responsavel pelo cabeçalho

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_Logo">
                    <h1>PysMind</h1>
                </div>

                <nav className="header_nav">
                    <ul className="header_menu">
                        <li className="header_item">Início</li>
                        <li className="header_item">Artigos</li>
                        <li className="header_item">Psicologia</li>
                        <li className="header_item">Contatos</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;