import "./Psychology.css"

interface Psychologyprops{
    id?: string;
}

export default function Psychology({id}: Psychologyprops){
    return(
        <section id={id} className="psychology">
            <div className="psychology__container">

                <span className="psychology__badge">
                    Introdução
                </span>

                <h2 className="psychology__title">
                    O que é Psicologia?
                </h2>

                <p className="psychology__text">
                    A Psicologia é a ciência que estuda o comportamento humano
                    e os processos mentais, buscando compreender como as pessoas
                    pensam, sentem e agem em diferentes situações da vida.
                </p>

                <p className="psychology__text">
                    Ao longo da história, diferentes pesquisadores desenvolveram
                    teorias e métodos que contribuíram para explicar aspectos da
                    mente humana, das emoções, da aprendizagem e das relações
                    sociais.
                </p>

            </div>
        </section>
    )
}