"use client";
import Image from 'next/image';
import styled from 'styled-components';

// Caminhos das imagens na pasta public
import central from '../public/images/assets/icon-pneu-90.png';
import homem from '../public/images/assets/icon-suporte-online-90.png';
import whatss from '../public/images/assets/icon-whatsapp-90.png';

const Main = styled.main`
  padding: 2rem;
  background-color: #f1f1f1;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const IconImage = styled(Image)`
  width: 90px;
  height: 90px;
  margin-right: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextTitle = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const TextParagraph = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export default function Contato() {
  return (
    <Main>
      <Title>SAC e Telefones:</Title>

      <Section>
        <IconImage src={whatss} alt="Ícone do Whatsapp" />
        <TextWrapper>
          <TextTitle>Whatsapp da Porto:</TextTitle>
          <TextParagraph>
            <ins>11 3003 9303</ins>
          </TextParagraph>
          <TextParagraph>
            Adicione nosso número aos seus contatos e siga as orientações da nossa assistente virtual.
          </TextParagraph>
        </TextWrapper>
      </Section>

      <Section>
        <IconImage src={central} alt="Imagem de uma mão com duas engrenagens" />
        <TextWrapper>
          <TextTitle>Central de serviços:</TextTitle>
          <TextParagraph>
            Capitais e regiões metropolitanas: <ins>4004 7678</ins>.<br />
            Grande São Paulo: <ins>333 76786</ins>.<br />
            Demais localidades: <ins>0300 337 6786</ins>.<br />
            Aviso de sinistro, solicitação de serviços para automóvel, residência e outros. Atendimento 24h.
          </TextParagraph>
        </TextWrapper>
      </Section>

      <Section>
        <IconImage src={homem} alt="Imagem de um homem com fone" />
        <TextWrapper>
          <TextTitle>SAC:</TextTitle>
          <TextParagraph>
            <ins>0800 727 2766</ins> - Atendimento 24h.<br />
            <ins>0800 727 8736</ins> - Atendimento exclusivo para pessoas com deficiência auditiva.
            Disponível 24 horas de domingo a domingo.
          </TextParagraph>
        </TextWrapper>
      </Section>
    </Main>
  );
}
