"use client";



import Link from 'next/link';

import { usePathname } from 'next/navigation';

import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import Image from "next/image";

import logo1 from "../public/images/assets/logo-4wheels-vermelho-branco-160px.png"; // Import the logo



// Wrapper geral do cabeçalho

const HeaderWrapper = styled.header`

  background-color: #000034;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 20px 50px;

`;



// Parte central para o título e navegação

const CenterWrapper = styled.div`

  display: flex;

  flex-direction: column;

  align-items: center;

  flex-grow: 1;

`;



// Logo e título

const LogoTitle = styled.div`

  display: flex;

  align-items: center;

`;



// Logo

const Logo = styled(Image)`

  width: 6em; // Use a consistent width for the logo

`;



// Título

const Title = styled.h1`

  font-family: var(--font-titulo);

  font-size: 3rem;

  color: var(--cor-primaria);

  margin-bottom: 20px;

  text-align: center;

`;



// Botão de "Entrar" e Navegação

const ButtonEnter = styled.a`

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

  border: none;



  &:hover {

    box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);

    transform: scale(1.1);

  }

  text-decoration: none;

  text-decoration:underline;

`;



// Barra de navegação

const Nav = styled.nav`

  display: flex;

  gap: 20px;

  margin-top: 10px; /* Adiciona espaço entre o título e os botões */

  text-decoration: none;

  text-decoration:underline;

`;



const NavLink = styled.a`

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

  text-decoration: none;

  text-decoration:underline;

  &:hover {

    box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);

    transform: scale(1.1);

  }

`;



const Header: React.FC = () => {

  const pathname = usePathname();

  const [headerTitle, setHeaderTitle] = useState('Suporte');



  useEffect(() => {

    // Atualizar o título com base na rota

    switch (pathname) {

      case '/Servicos':

        setHeaderTitle('Serviços');

        break;

      case '/Contato':

        setHeaderTitle('Contato');

        break;

      case '/Cadastro':

        setHeaderTitle('Cadastro');

        break;

      default:

        setHeaderTitle('Suporte');

        break;

    }

  }, [pathname]);



  return (

    <HeaderWrapper>

      {/* Logo */}

      <LogoTitle>

        <Logo

          src={logo1.src} // Use the imported logo here

          alt="Logo 4Wheels"

          width={160} // define a largura

          height={40} // define a altura

        />

      </LogoTitle>



      {/* Título dinâmico com base na rota */}

      <CenterWrapper>

        <Title>{headerTitle}</Title>



        {/* Navegação abaixo do título */}

        <Nav>

          <Link href="/Servicos" passHref>

            <NavLink>Serviços</NavLink>

          </Link>

          <Link href="/Contato" passHref>

            <NavLink>Contato</NavLink>

          </Link>

        </Nav>

      </CenterWrapper>



      {/* Botão Entrar à direita */}

      <Link href="/Cadastro" passHref>

        <ButtonEnter>Entrar</ButtonEnter>

      </Link>

    </HeaderWrapper>

  );

};



export default Header;

