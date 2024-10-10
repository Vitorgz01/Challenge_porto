"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';
import styles from './Cadastro.module.css'; // Importando o CSS

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

const SubmitButton = styled.button`
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
  cursor: pointer;
  &:hover {
    background-color: #9c1833;
  }
`;

export default function Cadastro() {
    useEffect(() => {
        const inputs = document.querySelectorAll(".input-field");
        const toggle_btn = document.querySelectorAll(".toggle");
        const main = document.querySelector("main");
        const bullets = document.querySelectorAll(".bullets span");
        const images = document.querySelectorAll(".image");

        inputs.forEach((inp) => {
            inp.addEventListener("focus", () => {
                inp.classList.add("active");
            });
            inp.addEventListener("blur", () => {
                if (inp.value !== "") return;
                inp.classList.remove("active");
            });
        });

        toggle_btn.forEach((btn) => {
            btn.addEventListener("click", () => {
                main.classList.toggle("sign-up-mode");
            });
        });

        function moveSlider() {
            let index = this.dataset.value;
            let currentImage = document.querySelector(`.img-${index}`);
            images.forEach((img) => img.classList.remove("show"));
            currentImage.classList.add("show");

            const textSlider = document.querySelector(".text-group");
            textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

            bullets.forEach((bull) => bull.classList.remove("active"));
            this.classList.add("active");
        }

        bullets.forEach((bullet) => {
            bullet.addEventListener("click", moveSlider);
        });

        return () => {
            inputs.forEach((inp) => {
                inp.removeEventListener("focus", () => {
                    inp.classList.add("active");
                });
                inp.removeEventListener("blur", () => {
                    if (inp.value !== "") return;
                    inp.classList.remove("active");
                });
            });
            toggle_btn.forEach((btn) => {
                btn.removeEventListener("click", () => {
                    main.classList.toggle("sign-up-mode");
                });
            });
            bullets.forEach((bullet) => {
                bullet.removeEventListener("click", moveSlider);
            });
        };
    }, []);

    return (
        <Main>
            <Box className={styles.box}>
                <InnerBox className={styles.innerBox}>
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
                                <Link href="#" className="toggle">Registrar-se</Link>
                            </Heading>

                            <div className="actual-form">
                                <InputWrap>
                                    <label>Nome</label>
                                    <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                                </InputWrap>

                                <InputWrap>
                                    <label>Senha</label>
                                    <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                                </InputWrap>

                                <SubmitButton>Sign In</SubmitButton>
                                <p className="text">
                                    Esqueceu sua senha e informações de login? <Link href="#">Obtenha ajuda!</Link>
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
                                <Link href="#" className="toggle">Entrar</Link>
                            </Heading>

                            <div className="actual-form">
                                <InputWrap>
                                    <label>Nome</label>
                                    <input type="text" minLength={4} className="input-field" autoComplete="off" required />
                                </InputWrap>

                                <InputWrap>
                                    <label>Email</label>
                                    <input type="email" className="input-field" autoComplete="off" required />
                                </InputWrap>

                                <InputWrap>
                                    <label>Senha</label>
                                    <input type="password" minLength={4} className="input-field" autoComplete="off" required />
                                </InputWrap>

                                <SubmitButton>Sign Up</SubmitButton>
                                <p className="text">
                                    Ao me registrar, concordo com os <Link href="#">Termos de serviço</Link> e <Link href="#">Política de privacidade</Link>.
                                </p>
                            </div>
                        </form>
                    </FormWrap>

                    <div className="carousel">
                        <div className="text-slider">
                            <div className="text-group">
                                <h2>Acompanhe a vida útil de seu veículo</h2>
                                <h2>Obtenha assistência automotiva e convide pessoas para o 4wheels!</h2>
                            </div>
                        </div>

                        <div className="bullets">
                            <span className="active" data-value="1"></span>
                            <span data-value="2"></span>
                            <span data-value="3"></span>
                        </div>
                        <img src="/img/image1.jpeg" className="image img-1 show" alt="" />
                        <img src="/img/image2.jpeg" className="image img-2" alt="" />
                        <img src="/img/image3.jpeg" className="image img-3" alt="" />
                    </div>
                </InnerBox>
            </Box>
        </Main>
    );
}
