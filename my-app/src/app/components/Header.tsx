"use client";

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: var(--cor-secundaria);
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin: 36px 0px 0px 77px;
  width: 6em;
`;

const Title = styled.h1`
  font-family: var(--font-titulo);
  font-size: 3rem;
  color: var(--cor-primaria);
  margin-left: 37.5%;
`;

const ButtonEnter = styled.a`
  margin: 1% 0 0 30%;
  background-color: var(--cor-botoes);
  font-family: var(--font-texto-botao);
  font-size: 1.25rem;
  padding: 1%;
  text-align: center;
  text-decoration: none;
  width: 7%;
  color: var(--cor-texto-botoes);
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s, transform 0.3s;
  border: none;

  &:hover {
    box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);
    transform: scale(1.1);
  }
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  margin: 0% 0% 1% 42%;
  background-color: var(--cor-botoes);
  font-family: var(--font-texto-botao);
  font-size: 1.25rem;
  padding: 1%;
  text-align: center;
  width: 7%;
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

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoTitle>
        <Logo src="/images/assets/logo-4wheels-vermelho-branco-160px.png" alt="Logo 4Wheels" />
        <Link href="/cadastro" passHref>
          <ButtonEnter>Entrar</ButtonEnter>
        </Link>
      </LogoTitle>
      <Nav>
        <Link href="/servicos" passHref>
          <NavLink>Serviços</NavLink>
        </Link>
        <Link href="/" passHref>
          <NavLink>Suporte</NavLink>
        </Link>
        <Link href="/contato" passHref>
          <NavLink>Contato</NavLink>
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
