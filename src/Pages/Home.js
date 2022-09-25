import "../App.css";
import "./home.css";
import Logo from '../images/logo.png';

export const HomePage = () => {
  return (
    <div className="main-login">
        <div class="left-login">
            <h1>Faça seu login <br></br> E comece a cadastrar!</h1>
            <img class="left-login-image" src={Logo} alt="Logo Rémedio Barato"></img>
        </div>
        <div class="right-login">
            <div class="card-login">
                <h1>LOGIN</h1>
                <div class="text-field">
                    <label for="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Usuário"></input> 
                </div>
                <div class="text-field">
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha"></input> 
                </div>
                <button class="btn-login">Login</button>
                <a target='_blank' href='/'>Ainda não possui conta? Cadastre-se aqui.</a>
            </div>
        </div>
    </div>
  );
};
