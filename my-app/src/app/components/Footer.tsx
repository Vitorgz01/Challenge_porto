"use client";
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--cor-secundaria);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px; /* Espaçamento entre os links e o texto de copyright */
`;

const FooterLink = styled.a`
  background-color: var(--cor-botoes);
  font-family: var(--font-texto-botao);
  font-size: 1.25rem;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  color: var(--cor-texto-botoes);
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);
    transform: scale(1.1);
  }
`;

const CopyRightText = styled.p`
  font-family: var(--font-titulo);
  font-size: 1.25rem;
  color: var(--cor-primaria);
  margin-top: 10px; /* Espaçamento entre os links e o texto */
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLinksContainer>
        <FooterLink href="../Sobre">Sobre Nós</FooterLink>
        <FooterLink href="../Integrantes">Integrantes</FooterLink>
        <FooterLink href="../Privacidade">Política de Privacidade</FooterLink>
      </FooterLinksContainer>
      <CopyRightText>
        Todos os direitos reservados © 2024 - Porto.
      </CopyRightText>
    </FooterWrapper>
  );
};

export default Footer;
