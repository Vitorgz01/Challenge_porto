export default function Home() {

    return (
        <main className="apresentacao">
            <h1 className="titulo_apresentacao">Como podemos te ajudar?</h1>
            <div className="apresentacao_pai">
                <section className="apresentacao_coluna">
                    <p className="apresentacao_bot_texto apresentacao_textos">Fale com o nosso chat para conseguir ajuda.</p>
                    <p className="apresentacao_bot_chat">Chat</p>
                </section>

                <section className="apresentacao_coluna">
                    <p className="apresentacao_opcoes_texto apresentacao_textos">Temos algumas opções prontas para ser mais rápido sua procura.</p>
                    <p className="apresentacao_opcoes_opcao">Opções</p>
                </section>
                <section className="apresentacao_coluna">
                    <p className="apresentacao_mecanicos_texto apresentacao_textos">Mecânicos com notas e preços:</p>
                    <p className="apresentacao_mecanicos_tabela">Tabela com os mecânicos</p>
                </section>
            </div>
            <div className="apresentacao_pagamento"><a className="apresentacao_pagamento_botao" href="">Ir para o pagamento</a>
            </div>
        </main>
    )

}