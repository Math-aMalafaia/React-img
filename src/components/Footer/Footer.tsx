import "./Footer.css"

// Componente responsavel pelo rodape 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <h2 className="footer_title"> PsyMind</h2>

                <p className="footer_description"> 
                    Conteudo educatico sobre psicologia ,
                    comportamento humano e desenvolvimento pessoal.
                </p>

                <span className="footer_copyright">
                    © 2026 psyMind. Todos oss ddiretos reservados.
                </span>
            </div>
        </footer>
    )
}