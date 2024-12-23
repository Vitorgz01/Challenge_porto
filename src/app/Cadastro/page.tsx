"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../public/images/assets/logo-4wheels.png";

export default function CadastroPage() {
  const router = useRouter();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);
  const inputRefs = useRef([]);
  const textSliderRef = useRef();

  const handleFocus = (index) => {
    inputRefs.current[index].classList.add("active");
  };

  const handleBlur = (index) => {
    if (inputRefs.current[index] && inputRefs.current[index].value === "") {
      inputRefs.current[index].classList.remove("active");
    }
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
    if (textSliderRef.current) {
      textSliderRef.current.style.transform = `translateY(${
        -(index - 1) * 2.2
      }rem)`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider((activeBullet % 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeBullet]);

  const handleSignIn = (e) => {
    e.preventDefault();
    router.push("/Servicos");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push("/Servicos");
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              className={`sign-in-form ${!isSignUpMode ? "active" : ""}`}
              onSubmit={handleSignIn}
            >
              <div className="logo">
                <Image src={logo} alt="4wheels" width={50} height={50} />
                <h4>
                  <span>4</span>wheels
                </h4>
              </div>
              <div className="heading">
                <h2>Bem-vindo de volta!</h2>
                <h6>Não registrado ainda?</h6>
                <button
                  type="button"
                  onClick={() => setIsSignUpMode(true)}
                  className="toggle"
                >
                  Registrar-se
                </button>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    ref={(el) => (inputRefs.current[0] = el)}
                    className="input-field"
                    onFocus={() => handleFocus(0)}
                    onBlur={() => handleBlur(0)}
                    required
                  />
                  <label>Nome</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    ref={(el) => (inputRefs.current[1] = el)}
                    className="input-field"
                    onFocus={() => handleFocus(1)}
                    onBlur={() => handleBlur(1)}
                    required
                  />
                  <label>Senha</label>
                </div>
                <button type="submit" className="botao">
                  Sign In
                </button>
              </div>
            </form>

            <form
              className={`sign-up-form ${isSignUpMode ? "active" : ""}`}
              onSubmit={handleSignUp}
            >
              <div className="logo">
                <Image src={logo} alt="4wheels" width={50} height={50} />
                <h4>
                  <span>4</span>wheels
                </h4>
              </div>
              <div className="heading">
                <h2>Vamos lá!</h2>
                <h6>Já possui uma conta?</h6>
                <button
                  type="button"
                  onClick={() => setIsSignUpMode(false)}
                  className="toggle"
                >
                  Entrar
                </button>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    ref={(el) => (inputRefs.current[2] = el)}
                    className="input-field"
                    onFocus={() => handleFocus(2)}
                    onBlur={() => handleBlur(2)}
                    required
                  />
                  <label>Nome</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="email"
                    ref={(el) => (inputRefs.current[3] = el)}
                    className="input-field"
                    onFocus={() => handleFocus(3)}
                    onBlur={() => handleBlur(3)}
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    ref={(el) => (inputRefs.current[4] = el)}
                    className="input-field"
                    onFocus={() => handleFocus(4)}
                    onBlur={() => handleBlur(4)}
                    required
                  />
                  <label>Senha</label>
                </div>
                <button type="submit" className="botao">
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="/images/img-1.png"
                className={`image img-1 ${activeBullet === 1 ? "show" : ""}`}
                alt="Imagem 1"
              />
              <img
                src="/images/img-2.png"
                className={`image img-2 ${activeBullet === 2 ? "show" : ""}`}
                alt="Imagem 2"
              />
              <img
                src="/images/img-3.png"
                className={`image img-3 ${activeBullet === 3 ? "show" : ""}`}
                alt="Imagem 3"
              />
            </div>
            <div className="text-slider">
              <div ref={textSliderRef} className="text-wrap">
                <div className="text-group">
                  <h2>Acompanhe a vida útil de seu veículo</h2>
                  <h2>Obtenha assistência automotiva</h2>
                  <h2>Convide amigos para o 4wheels!</h2>
                </div>
              </div>
              <div className="bullets">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    onClick={() => moveSlider(i)}
                    className={i === activeBullet ? "active" : ""}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body,
        input {
          font-family: "Poppins", sans-serif;
        }

        main {
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background-color: #010035;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .box {
          position: relative;
          width: 100%;
          max-width: 1020px;
          height: 640px;
          background-color: #fff;
          border-radius: 3.3rem;
          box-shadow: 0 60px 40px -30px rgba(255, 0, 0, 0.203);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inner-box {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
        }
        .toggle {
          color: #000;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 500;
          transition: 0.3s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .toggle:hover {
          color: #ff0000;
        }

        .box {
          position: relative;
          width: 100%;
          max-width: 1020px;
          height: 640px;
          background-color: #fff;
          border-radius: 3.3rem;
          box-shadow: 0 60px 40px -30px rgba(255, 0, 0, 0.203);
        }

        .inner-box {
          position: absolute;
          width: calc(100% - 4.1rem);
          height: calc(100% - 4.1rem);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .forms-wrap {
          height: 0%;
          width: 50%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          flex-direction: column;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          transition: 0.8s ease-in-out;
        }

        form {
          max-width: 260px;
          width: 100%;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          transition: opacity 0.4s ease;
        }

        .sign-in-form.active {
          opacity: 1;
          pointer-events: all;
        }

        .sign-up-form.active {
          opacity: 1;
          pointer-events: all;
        }

        .sign-in-form,
        .sign-up-form {
          opacity: 0;
          pointer-events: none;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo img {
          width: 50px;
          margin-right: 0.1rem;
        }

        .logo h4 {
          font-size: 1.1rem;
          margin-top: -5px;
          letter-spacing: -0.5px;
          color: #ff0000;
        }

        .logo h4 span {
          color: #010035;
        }

        .heading h2 {
          font-size: 2.1rem;
          font-weight: 600;
          padding-bottom: 2%;
          color: #000;
        }

        .heading h6 {
          color: #bababa;
          font-weight: 400;
          font-size: 0.75rem;
          display: inline;
        }

        .input-wrap {
          position: relative;
          height: 37px;
          margin-bottom: 2rem;
        }

        .input-field {
          position: absolute;
          width: 100%;
          height: 100%;
          background: none;
          border: none;
          outline: none;
          border-bottom: 1px solid #bbb;
          padding: 0;
          font-size: 0.95rem;
          color: #151111;
          transition: 0.4s;
        }

        label {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.95rem;
          color: #bbb;
          pointer-events: none;
          transition: 0.4s;
        }

        .input-field.active {
          border-bottom-color: #151111;
        }

        .input-field.active + label {
          font-size: 0.75rem;
          top: -2px;
        }

        .botao {
          display: inline-block;
          width: 100%;
          height: 43px;
          background-color: #010035;
          color: #fff;
          cursor: pointer;
          border-radius: 0.8rem;
          font-size: 0.8rem;
          margin-bottom: 2rem;
          transition: 0.3s;
          text-align: center;
          padding-top: 0.7rem;
          text-decoration: none;
        }

        .botao:hover {
          background-color: #ff0000;
          box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);
          transform: scale(1.1);
        }

        .carousel {
          position: absolute;
          height: 100%;
          width: 55%;
          left: 45%;
          top: 0;
          background-color: #010035;
          border-radius: 2rem;
          display: grid;
          grid-template-rows: auto 1fr;
          padding-bottom: 2rem;
          overflow: hidden;
          transition: 0.8s ease-in-out;
        }

        .images-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          visibility: hidden;
        }

        .image {
          width: 100%;
          grid-column: 1/2;
          grid-row: 1/2;
          opacity: 0;
          transition: opacity 0.3s, transform 0.5s;
        }

        .image.show {
          opacity: 1;
          transform: none;
        }

        .text-slider {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .text-wrap {
          max-height: 2.2rem;
          overflow: hidden;
          margin-bottom: 2.5rem;
        }

        .text-group {
          display: flex;
          flex-direction: column;
          text-align: center;
          transform: translateY(0);
          transition: 0.5s;
        }

        .text-group h2 {
          line-height: 2.2rem;
          font-weight: 600;
          font-size: 1.6rem;
          color: #fff;
        }

        .bullets {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bullets span {
          display: block;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #aaa;
          margin: 0 0.25rem;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }

        .bullets span.active {
          width: 1.1rem;
          background-color: #ff0000;
          border-radius: 1rem;
        }

        @media (max-width: 850px) {
          .box {
            height: auto;
            max-width: 550px;
            overflow: hidden;
          }

          .inner-box {
            position: static;
            transform: none;
            width: revert;
            height: revert;
            padding: 2rem;
          }

          .forms-wrap {
            position: revert;
            width: 100%;
            height: auto;
          }

          form {
            max-width: revert;
            padding: 1.5rem 2.5rem 2rem;
            transition: transform 0.8s ease-in-out, opacity 0.45s linear;
          }

          .heading {
            margin: 2rem 0;
          }

          .carousel {
            position: revert;
            height: auto;
            width: 100%;
            padding: 3rem 2rem;
            display: flex;
          }

          .images-wrapper {
            display: none;
          }

          .text-slider {
            width: 100%;
          }
        }

        @media (max-width: 530px) {
          main {
            padding: 1rem;
          }

          .box {
            border-radius: 2rem;
          }

          .inner-box {
            padding: 1rem;
          }

          .carousel {
            padding: 1.5rem 1rem;
            border-radius: 1.6rem;
          }

          .text-wrap {
            margin-bottom: 1rem;
          }

          .text-group h2 {
            font-size: 1.2rem;
          }

          form {
            padding: 1rem 2rem 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}
