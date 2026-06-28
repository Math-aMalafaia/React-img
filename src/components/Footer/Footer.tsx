import "./Footer.css"

// Componente responsavel pelo rodape 

interface footerprops{
    id?: string;
}

export default function Footer({id}: footerprops) {
    return (
        <footer id={id} className="footer">
            <div className="footer_container">

                <section className="footer_about">
                    
                    <h2 className="footer_title"> PsyMind</h2>

                    <p> 
                        Conteudo educatico sobre psicologia ,
                        comportamento humano e desenvolvimento pessoal.
                    </p>

                </section>

                <section className="footer_section">

                    <h3>Navegação</h3>

                    <ul>
                        <li>Inicio</li>
                        <li>Artigos</li>
                        <li>Psicologia</li>
                        <li>Contatos</li>
                    </ul>

                </section>

                <section className="footer_section">
                    <h3>Escolas</h3>

                    <ul>
                        <li>Estruturalismo</li>
                        <li>funcionalismo</li>
                        <li>Behaviorismo</li>
                        <li>Psicanálise</li>
                    </ul>

                </section>

                <div className="footer_bottom">

                    <span>
                        © 2026 psyMind. Todos oss ddiretos reservados.
                    </span>

                </div>
            </div>
        </footer>
    )
}