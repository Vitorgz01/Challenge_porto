import { Link } from "react-router-dom"
export default function Cadastro(){
    
    return(
        <main>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form action="cadastro.html" autoComplete="off" className="sign-in-form">
                                <div className="logo">
                                    <img src="./img/logo4wheels.jpeg" alt="4wheels" />
                                    <h4><span>4</span>wheels</h4>
                                </div>

                                <div className="heading">
                                    <h2>Bem-vindo de volta!</h2>
                                    <h6>Não registrado ainda?</h6>
                                    <a href="#" className="toggle">Registrar-se</a>
                                </div>

                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <input
                                            type="text"
                                            minLength={4}
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Nome</label>
                                    </div>

                                    <div className="input-wrap">
                                        <input
                                            type="password"
                                            minLength={4}
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Senha</label>
                                    </div>

                                    <Link to='/' className="botao">Sign In</Link>
                                    <p className="text">
                                        Esqueceu sua senha e informações de login? 
                                        <a href="#">Obtenha ajuda!</a>
                                    </p>
                                </div>
                            </form>

                            <form action="cadastro.html" autoComplete="off" className="sign-up-form">
                                <div className="logo">
                                    <img src="./img/logo4wheels.jpeg" alt="4wheels" />
                                    <h4><span>4</span>wheels</h4>
                                </div>

                                <div className="heading">
                                    <h2>Vamos lá!</h2>
                                    <h6>Já possui uma conta?</h6>
                                    <a href="#" className="toggle">Entrar</a>
                                </div>

                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <input
                                            type="text"
                                            minLength={4}
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Nome</label>
                                    </div>

                                    <div className="input-wrap">
                                        <input
                                            type="email"
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Email</label>
                                    </div>

                                    <div className="input-wrap">
                                        <input
                                            type="password"
                                            minLength={4}
                                            className="input-field"
                                            autoComplete="off"
                                            required
                                        />
                                        <label>Senha</label>
                                    </div>

                                    <a href="../index.html" className="sign-btn botao">Sign Up</a>
                                    <p className="text">
                                        Ao me registrar, concordo com os
                                        <a href="#">Termos de serviço</a> e 
                                        <a href="#">Política de privacidade</a>.
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src="./img/image1.jpeg" className="image img-1 show" alt="" />
                                <img src="./img/image2.jpeg" className="image img-2" alt="" />
                                <img src="./img/image3.jpeg" className="image img-3" alt="" />
                            </div>

                            <div className="text-slider">
                                <div className="text-wrap">
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
                            </div>
                        </div>
                    </div>
                </div>
            </main> 
    )
}