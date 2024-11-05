// src/app/404.tsx
import Link from 'next/link';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff4c4c;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  font-size: 1.1rem;
  color: #0066cc;
  text-decoration: underline;

  &:hover {
    color: #004c99;
  }
`;

export default function ErrorPage() {
    return (
        <Main>
            <Title>ERRO 404</Title>
            <Message>Página não encontrada</Message>
            <HomeLink href="/">Voltar para a página inicial</HomeLink>
        </Main>
    );
}
