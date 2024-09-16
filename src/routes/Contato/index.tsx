import whatss from '../../assets/icon-whatsapp-90.png'
import central from '../../assets/icon-serviço-90.png'
import homem from '../../assets/icon-suporte-online-90.png'

export default function Contato(){

    return(
        <main className="apresentacao_contato">
            <div>
                <h1 className="titulo_contato">SAC e Telefones:</h1>

                <section className="contato_whatsapp">
                    <img src={whatss} alt="Ícone do Whatsapp" className="imagem_whatsapp" />
                    <div className="texto_whatsapp">
                        <p className="titulo_whatsapp"><strong>Whatsapp da Porto: </strong> <ins>11 3003 9303</ins>.</p>
                        <p className="paragrafo_whatsapp">Adicione nosso número aos seus contatos e siga as orientações da nossa assistente virtual.</p>
                    </div>
                </section>

                <section className="contato_central">
                    <img src={central} alt="Imagem de uma mão com duas engrenagens" className="imagem_central" />
                    <div className="texto_central">
                        <p className="titulo_central"><strong>Central de serviços:</strong></p>
                        <p className="paragrafo_central">
                            Capitais e regiões metropolitanas: <ins>4004 7678</ins>.<br />
                            Grande São Paulo: <ins>333 76786</ins>.<br />
                            Demais localidades: <ins>0300 337 6786</ins>.<br />
                            Aviso de sinistro, solicitação de serviços para automóvel, residência e outros. Atendimento 24h.
                        </p>
                    </div>
                </section>

                <section className="contato_sac">
                    <img src={homem} alt="Imagem de um homem com fone" className="imagem_sac" />
                    <div className="texto_sac">
                        <p className="titulo_sac"><strong>SAC:</strong></p>
                        <p className="paragrafo_sac">
                            <ins>0800 727 2766</ins> - Atendimento 24h.<br />
                            <ins>0800 727 8736</ins> - Atendimento exclusivo para pessoas com deficiência auditiva. Disponível 24 horas de domingo a domingo.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}