// src/app/privacidade/page.tsx
import styled from 'styled-components';

const Main = styled.main`
  padding: 2rem;
  background-color: #f1f1f1;
  line-height: 1.6;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Section = styled.section`
  font-size: 1.1rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-top: 1.5rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  text-align: justify;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin-top: 0.5rem;
`;

export default function Privacidade() {
    return (
        <Main>
            <TitleContainer>
                <Title>Política de Privacidade da Porto</Title>
            </TitleContainer>

            <Section>
                <Paragraph>
                    Nós, do Grupo Porto, formado pela Porto Seguro S.A., inscrita no CNPJ/ME, sob o nº. 02.149.205/0001-69 e pelas empresas que ela controla, direta ou indiretamente, prezando pela tradição do bom atendimento e transparência na forma de tratamento dos dados das pessoas com quem se relaciona, sejam elas clientes, ex-clientes, funcionários, corretores, prestadores de serviços e fornecedores, tanto na contratação de seus produtos e serviços quanto na candidatura às vagas de trabalho ou ainda, com quem mais acessa nossas plataformas digitais, mantemos o compromisso de continuar respeitando e assegurando a privacidade e a proteção dos dados pessoais de quem quer que seja.
                </Paragraph>
                <Paragraph>
                    Por isso, apresentamos nossa Política de Privacidade, que tem como objetivo fornecer a você informações claras e precisas sobre o tratamento de dados pessoais e sensíveis realizados pela Porto ao utilizar seus sites, portais, aplicativos, produtos e serviços.
                </Paragraph>

                <SubTitle>1. Lei Geral de Proteção de Dados (LGPD)</SubTitle>
                <Paragraph>
                    A LGPD, lei federal 13.709/18, que já existe desde 2020, tem como objetivo proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.
                </Paragraph>
                <Paragraph>
                    É a unificação das previsões acerca das obrigações e responsabilidades das partes no tratamento de dados pessoais e sensíveis, tanto no mundo físico quanto no digital.
                </Paragraph>
                <Paragraph>
                    As obrigações e responsabilidades previstas na lei se aplicam às pessoas físicas, que realizem o tratamento de dados pessoais para fins econômicos, e pessoas jurídicas de direito público (entidades e órgãos governamentais) e privado.
                </Paragraph>
                <Paragraph>
                    Seus conceitos estão estabelecidos no artigo 5º e tem como principais personagens: o titular de dados (pessoa física viva), o controlador de dados (quem determina a forma de tratamento dos dados), o operador (quem efetua o tratamento dos dados sob as ordens do controlador) e a ANPD (Autoridade Nacional de Proteção de Dados), órgão da administração pública responsável por regular e fiscalizar o cumprimento da LGPD.
                </Paragraph>

                <SubTitle>2. Coleta de Dados</SubTitle>
                <Paragraph>
                    Os seus dados pessoais e seus dados sensíveis são recebidos por nós no momento da contratação dos nossos produtos e serviços. Isso ocorre quando:
                </Paragraph>
                <List>
                    <ListItem>Você preenche os formulários em nossas plataformas digitais;</ListItem>
                    <ListItem>Você entra em contato com nossas centrais de atendimento;</ListItem>
                    <ListItem>Você é incluído em nossos sistemas por terceiros intermediários na contratação, como corretores, representantes bancários, estipulantes de seguros, agentes financeiros e parceiros de negócio;</ListItem>
                    <ListItem>Você navega em nossos canais digitais.</ListItem>
                </List>
            </Section>
        </Main>
    );
}
