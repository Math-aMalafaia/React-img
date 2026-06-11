import "./Header.css";

// Componete responsavel pelo cabeçalho

function Header() {
    return (
        <header className="header">
            <div className="header_Logo">
                <h1>PysMind</h1>
            </div>

            <nav className="header_nav">
                <ul className="header_menu">
                    <li>Início</li>
                    <li>Artigos</li>
                    <li>Psicologia</li>
                    <li>Contatos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;