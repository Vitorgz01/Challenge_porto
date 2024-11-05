"use client";
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f1f1f1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 900px;
  gap: 2rem;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 280px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
`;

const ChatButton = styled.p`
  background-color: #fd1645;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #c31337;
  }
`;

const OptionsButton = styled(ChatButton)`
  background-color: #4caf50;

  &:hover {
    background-color: #3d8c40;
  }
`;

const TableButton = styled(ChatButton)`
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;

const PaymentLink = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #ff5722;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: #e64a19;
  }
`;

export default function Suporte() {
  return (
    <Main>
      <Title>Como podemos te ajudar?</Title>
      <SectionWrapper>
        <Column>
          <Text>Fale com o nosso chat para conseguir ajuda.</Text>
          <ChatButton>Chat</ChatButton>
        </Column>

        <Column>
          <Text>Temos algumas opções prontas para ser mais rápido sua procura.</Text>
          <OptionsButton>Opções</OptionsButton>
        </Column>

        <Column>
          <Text>Mecânicos com notas e preços:</Text>
          <TableButton>Tabela com os mecânicos</TableButton>
        </Column>
      </SectionWrapper>
      <PaymentLink href="#">Ir para o pagamento</PaymentLink>
    </Main>
  );
}
