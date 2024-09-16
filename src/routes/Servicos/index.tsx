import relogio from '../../assets/icon-24-horas-90.png'
import sercarro from '../../assets/icon-serviço-de-carro-90.png'
import pneufu from '../../assets/icon-pneu-90.png'
import chaveiro from '../../assets/icon-aluguel-de-carro-90.png'

export default function Servicos() {
    return (
        <main className="apresentacao-servicos">
            <div className="div-atendimento-gincho">
                <h1 className="apresentacao-servicos-titulo">Nossos serviços</h1>
                <div className="apresentacao-servicos-titulo-atendimento">
                    <section className="apresentacao-servicos-atendimento">
                        <img src={relogio} alt="imagem de um relógio com o número 24 no meio" className="imagem-atendimento" />
                        <section className="texto-atendimento">
                            <p className="titulo-atendimento"><strong>Atendimento 24 Horas:</strong></p>
                            <p className="paragrafo-atendimento">
                                Serviço de assistência disponível <br />
                                24 horas por dia, 7 dias por semana, <br />
                                para ajudar os clientes em situações <br />
                                de emergência.
                            </p>
                        </section>
                    </section>
                </div>

                <section className="apresentacao-servicos-gincho">
                    <img src={sercarro} alt="imagem de um carro e uma ferramenta" className="imagem-gincho" />
                    <section className="texto-gincho">
                        <p className="titulo-gincho"><strong>Guincho:</strong></p>
                        <p className="paragrafo-gincho">
                            Serviço de guincho para transporte do veículo <br />
                            em caso de pane ou acidente, garantindo que <br />
                            o veículo seja levado a um local seguro <br />
                            ou a uma oficina autorizada.
                        </p>
                    </section>
                </section>
            </div>

            <div className="div-pneu-chaveiro">
                <section className="apresentacao-servicos-pneu">
                    <img src={pneufu} alt="imagem de um pneu furado" className="imagem-pneu" />
                    <section className="texto-pneu">
                        <p className="titulo-pneu"><strong>Troca de Pneus:</strong></p>
                        <p className="paragrafo-pneu">
                            Serviço de troca de pneus em caso de pneu furado <br />
                            ou danificado, proporcionando maior segurança <br />
                            ao cliente e seu veículo.
                        </p>
                    </section>
                </section>

                <section className="apresentacao-servicos-chaveiro">
                    <img src={chaveiro} alt="imagem de um carro e uma chave em cima dele" className="imagem-chaveiro" />
                    <section className="texto-chaveiro">
                        <p className="titulo-chaveiro"><strong>Chaveiro:</strong></p>
                        <p className="paragrafo-chaveiro">
                            Assistência para abertura do veículo em caso de perda, <br />
                            roubo ou travamento das chaves, além da confecção de chaves reservas.
                        </p>
                    </section>
                </section>
            </div>
        </main>
    );
}
