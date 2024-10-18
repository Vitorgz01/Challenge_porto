"use client";
import styled from 'styled-components';

const Main = styled.main`
  padding: 2rem;
  background-color: #f1f1f1;
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
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  text-align: justify;
`;

export default function Sobre() {
  return (
    <Main>
      <TitleContainer>
        <Title>Sobre nós</Title>
      </TitleContainer>
      <Section>
        <Paragraph>
          A Porto Seguro é uma das mais renomadas empresas do setor de seguros no Brasil, conhecida por sua excelência em proteger vidas e bens há décadas. Fundada em 1945, a empresa tem uma longa história de compromisso com seus clientes, oferecendo uma ampla gama de produtos e serviços para atender às necessidades de segurança e tranquilidade de indivíduos e empresas.
        </Paragraph>
        <Paragraph>
          Com uma abordagem centrada no cliente, a Porto Seguro tem como missão principal proporcionar segurança e confiança em todas as etapas da vida de seus segurados. Seja oferecendo seguros para automóveis, residências, empresas ou saúde, a empresa se destaca pela qualidade de seus serviços, pela agilidade no atendimento e pela constante busca por inovação.
        </Paragraph>
        <Paragraph>
          Além dos serviços tradicionais de seguros, a Porto Seguro também se destaca por suas iniciativas de responsabilidade social e sustentabilidade. Por meio de programas educacionais, ambientais e culturais, a empresa busca contribuir para o desenvolvimento das comunidades onde atua, demonstrando seu compromisso com o bem-estar social e o meio ambiente.
        </Paragraph>
        <Paragraph>
          Com uma equipe dedicada e especializada, a Porto Seguro está sempre pronta para oferecer soluções personalizadas e adequadas às necessidades de cada cliente. Seja para proteger seu patrimônio, sua saúde ou seu futuro, contar com a Porto Seguro é ter a certeza de estar em boas mãos, em todas as situações.
        </Paragraph>
        <Paragraph>
          Em resumo, a Porto Seguro é mais do que uma empresa de seguros; é uma parceira confiável, que está ao lado de seus clientes, oferecendo segurança, tranquilidade e proteção em todos os momentos da vida.
        </Paragraph>
      </Section>
    </Main>
  );
}
