
"use client";
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--cor-secundaria);
`;

const FooterLink = styled.a`
  margin: 1% 0 1% 25%;
  background-color: var(--cor-botoes);
  font-family: var(--font-texto-botao);
  font-size: 1.25rem;
  padding: 1%;
  text-align: center;
  width: 15%;
  text-decoration: none;
  border-radius: 10px;
  color: var(--cor-texto-botoes);
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);
    transform: scale(1.1);
  }
`;

const CopyRightText = styled.p`
  margin-left: 40%;
  font-family: var(--font-titulo);
  font-size: 1.25rem;
  color: var(--cor-primaria);
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterLink href="/sobre">Sobre</FooterLink>
      <FooterLink href="/integrantes">Integrantes</FooterLink>
      <FooterLink href="/privacidade">Privacidade</FooterLink>
      <CopyRightText>© 2023 4Wheels. Todos os direitos reservados.</CopyRightText>
    </FooterWrapper>
  );
};

export default Footer;
