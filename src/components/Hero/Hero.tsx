import "./Hero.css"
interface Heroprops{
    id?: string;
}

export default function hero({ id}: Heroprops) {
    return(
        <section id={id} className="hero">
            <div className="hero_ccontent">
                <span className="hero_tag">
                    Portal Educacional
                </span>

                <h1 className="hero_title">
                    Explorando a Historia da Psicologia
                </h1>

                <p className="hero_description">
                    conheça  os pricipais pensadores, escolas e ideais que contribuiram para o desenvolvimento da Psicologia como ciencia ao longo da historia.
                </p>
            </div>

        </section>
    );
}