import LogIn from './components/LogIn';
import "./styles/LoginScren.css";

const UserLogIn = () => {
    return (
        <div id="log">
             <div className='title'> 
                 <h1 className='title'> Portal do aluno </h1>
            </div>
            <LogIn />
            <div className='newAccount'> 
                    <p>Ainda não tem conta? <a href="/UserSignUp">Cadastre-se</a></p>
                </div>
            </div>

    );
}
 
export default UserLogIn;