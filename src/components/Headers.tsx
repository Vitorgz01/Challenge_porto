import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo-4wheels-vermelho-branco-90px.png';
 
const Headers: React.FC = () => {
  const location = useLocation();
 
  // Função para determinar o título com base na localização
  const getTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Página Inicial';
      case '/integrantes':
        return 'Integrantes';
      case '/contato':
        return 'Contato';
      case '/servicos':
        return 'Serviços';
      case '/cadastro':
        return 'Cadastro';
      case '/sobre':
        return 'Sobre nós';
      case '/privacidade':
        return 'Privacidade';
      default:
        return 'Meu Site';
    }
  };
 
  // useEffect para alterar o título da página quando a rota mudar
  useEffect(() => {
    document.title = getTitle(location.pathname); // Atualiza o título do documento
  }, [location.pathname]); // Executa o efeito sempre que o pathname mudar
 
  return (
    <header className="cabecalho">
      <div className="logo_titulo">
        <img src={logo} alt="Logo 4Wheels" className="logo" />
        {/* <h1 className="cabecalho_titulo">Suporte</h1> */}
        <Link to='/cadastro' className="botao_entrar">Entrar</Link>
      </div>
      <nav className="cabecalho_link">
        <Link to='/servicos' className="cabecalho_link_servico">Serviços</Link>
        <Link to='/' className="cabecalho_link_suporte">Suporte</Link>
        <Link to='/contato' className="cabecalho_link_contato">Contato</Link>
      </nav>
      {/* Título dinâmico com base na rota */}
      <h1>{getTitle(location.pathname)}</h1>
    </header>
  );
};
 
export default Headers;