import vitor from '../../assets/fotovitor.png'
import victor from '../../assets/victor.jpg'
import gabriel from '../../assets/gabriel-177x250.jpeg'

export default function Integrantes(){

    return(
        <main>
            <div className="integrantes">
                <h1 className="titulo_integrantes">Integrantes:</h1>

                <section className="integrante_erick">
                    <img className="imagem" src={vitor} alt="Foto do Vitor" />
                    <p className="informacoes">
                        Nome: Vitor de Oliveira ginza<br />
                        RM: 554849<br />
                        Turma: 1TDSPL - 2024<br />
                        Github: <a href="https://github.com/Vitorgz01" target="_blank" rel="noopener noreferrer">github.com/Vitorgz01</a>
                    </p>
                </section>

                <section className="integrante_felipe">
                    <img className="imagem" src={victor} alt="Foto do Victor" />
                    <p className="informacoes">
                        Nome: Victor Hugo Carvalho Pereira<br />
                        RM: 558550<br />
                        Turma: 1TDSPL - 2024<br />
                        Github: <a href="https://github.com/VictorHugo55" target="_blank" rel="noopener noreferrer">github.com/VictorHugo55</a>
                    </p>
                </section>

                <section className="integrante_gabriel">
                    <img className="imagem" src={gabriel} alt="Foto do Gabriel" />
                    <p className="informacoes">
                        Nome: Gabriel Gomes<br />
                        RM: 555427<br />
                        Turma: 1TDSPL - 2024<br />
                        Github: <a href="https://github.com/GomesMancera" target="_blank" rel="noopener noreferrer">github.com/GomesMancera</a>
                    </p>
                </section>

                <p className="link_repositorio">
                    Link do Repositório: <a href="https://github.com/Vitorgz01/Challenge_porto" target="_blank" rel="noopener noreferrer">https://github.com/felipesora/challenge-porto-seguro/invitations</a>
                </p>
            </div>
        </main>
    )
}