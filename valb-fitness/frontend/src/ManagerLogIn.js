import LogIn from './components/LogIn';
import "./styles/LoginScren.css";
const ManagerLogIn = () => {
    return (
        <div id="log">
        <div className='title'> 
            <h1 className='title'> Portal da gerência </h1>
       </div>
            <LogIn />
            <div className='newAccount'>
            <p>Ainda não tem conta? <a href="/ManagerSignUp">Cadastre-se</a></p>
            </div>
        </div>
    );
}
 
export default ManagerLogIn;