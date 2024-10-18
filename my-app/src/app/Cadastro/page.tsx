"use client";

import { useEffect, useRef, useState } from "react";

export default function CadastroPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);
  const inputRefs = useRef([]);
  const textSliderRef = useRef();

  const handleFocus = (index) => {
    inputRefs.current[index].classList.add("active");
  };

  const handleBlur = (index) => {
    if (inputRefs.current[index].value === "") {
      inputRefs.current[index].classList.remove("active");
    }
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
    textSliderRef.current.style.transform = `translateY(${-(index - 1) * 2.2
      }rem)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlider((activeBullet % 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeBullet]);

  return (
    <main className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* Sign-in Form */}
            <form className="sign-in-form">
              <div className="logo">
                <img
                  src="../public/images/assets/logo-4wheels.png"
                  alt="4wheels"
                />
                <h4>
                  <span>4</span>wheels
                </h4>
              </div>
              <div className="heading">
                <h2>Bem-vindo de volta!</h2>
                <h6>Não registrado ainda?</h6>
                <a onClick={() => setIsSignUpMode(true)} className="toggle">
                  Registrar-se
                </a>
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
                <a href="../Contato/" className="botao">
                  Sign In
                </a>
              </div>
            </form>

            {/* Sign-up Form */}
            <form className="sign-up-form">
              <div className="logo">
                <img src="../public/images/assets/logo-4wheels.png" alt="4wheels" />
                <h4>
                  <span>4</span>wheels
                </h4>
              </div>
              <div className="heading">
                <h2>Vamos lá!</h2>
                <h6>Já possui uma conta?</h6>
                <a onClick={() => setIsSignUpMode(false)} className="toggle">
                  Entrar
                </a>
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
                <a href="#" className="botao">
                  Sign Up
                </a>
              </div>
            </form>
          </div>

          {/* Carousel */}
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

        /* General reset and font styles */
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body,
        input {
          font-family: "Poppins", sans-serif;
        }

        /* Main layout */
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
          position: absolute;
          height: 100%;
          width: 45%;
          top: 0;
          left: 0;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          transition: 0.8s ease-in-out;
        }

        /* Form styling */
        form {
          max-width: 260px;
          width: 100%;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          transition: opacity 0.02s 0.4s;
        }

        .sign-up-form {
          opacity: 0;
          pointer-events: none;
        }

        /* Logo styling */
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

        /* Headings */
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

        .toggle {
          color: #000;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 500;
          transition: 0.3s;
        }

        .toggle:hover {
          color: #ff0000;
        }

        /* Input styling */
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

        /* Button styling */
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
          -webkit-transition-duration: 0.3s;
          -webkit-transition-property: box-shadow, transform;
          transition-property: box-shadow, transform;
        }

        .botao:hover {
          background-color: #ff0000;
          box-shadow: 0 0 20px rgba(175, 175, 175, 0.5);
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }

        /* Carousel styling */
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

        /* Text slider styling */
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

        /* Responsive styling */
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
