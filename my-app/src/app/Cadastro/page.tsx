// src/pages/Cadastro.tsx
import Link from 'next/link';
import styled from 'styled-components';

// Estilos
const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const Box = styled.div`
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const InnerBox = styled.div`
  display: flex;
`;

const FormWrap = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: auto;
  }
  h4 {
    margin-left: 10px;
    font-size: 1.5rem;
    color: #fd1645;
  }
`;

const Heading = styled.div`
  margin: 1.5rem 0;
  h2 {
    font-size: 1.8rem;
    color: #333;
  }
  h6 {
    font-size: 1rem;
    color: #666;
    margin-top: 0.5rem;
  }
  .toggle {
    color: #fd1645;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const InputWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.9rem;
    color: #555;
  }
  .input-field {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;

const SubmitButton = styled(Link)`
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: #fd1645;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #9c1833;
  }
`;

export default function Cadastro() {
    return (
        <Main>
            <Box>
                <InnerBox>
                    <FormWrap>
                        <form action="cadastro.html" autoComplete="off" className="sign-in-form">
                            <Logo>
                                <img src="/img/logo4wheels.jpeg" alt="4wheels" />
                                <h4>
                                    <span>4</span>wheels
                                </h4>
                            </Logo>

                            <Heading>
                                <h2>Bem-vindo de volta!</h2>
                                <h6>Não registrado ainda?</h6>
                                <a href="#" className="toggle">Registrar-se</a>
                            </Heading>

                            <div className="actual-form">
                                <InputWrap>
                                    <label>Nome</label>
                                    <input
                                        type="text"
                                        minLength={4}
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                </InputWrap>

                                <InputWrap>
                                    <label>Senha</label>
                                    <input
                                        type="password"
                                        minLength={4}
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                </InputWrap>

                                <SubmitButton to="/">Sign In</SubmitButton>
                                <p className="text">
                                    Esqueceu sua senha e informações de login?
                                    <a href="#">Obtenha ajuda!</a>
                                </p>
                            </div>
                        </form>

                        <form action="cadastro.html" autoComplete="off" className="sign-up-form">
                            <Logo>
                                <img src="/img/logo4wheels.jpeg" alt="4wheels" />
                                <h4>
                                    <span>4</span>wheels
                                </h4>
                            </Logo>

                            <Heading>
                                <h2>Vamos lá!</h2>
                                <h6>Já possui uma conta?</h6>
                                <a href="#" className="toggle">Entrar</a>
                            </Heading>

                            <div className="actual-form">
                                <InputWrap>
                                    <label>Nome</label>
                                    <input
                                        type="text"
                                        minLength={4}
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                </InputWrap>

                                <InputWrap>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                </InputWrap>

                                <InputWrap>
                                    <label>Senha</label>
                                    <input
                                        type="password"
                                        minLength={4}
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                </InputWrap>

                                <SubmitButton to="/index">Sign Up</SubmitButton>
                                <p className="text">
                                    Ao me registrar, concordo com os <a href="#">Termos de serviço</a> e
                                    <a href="#">Política de privacidade</a>.
                                </p>
                            </div>
                        </form>
                    </FormWrap>

                    <div className="carousel">
                        {/* Inserir imagens e textos do carrossel aqui */}
                    </div>
                </InnerBox>
            </Box>
        </Main>
    );
}
