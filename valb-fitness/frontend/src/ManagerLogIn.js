import LogIn from './components/LogIn';
const ManagerLogIn = () => {
    return (
        <div className="managerlogin">
            <LogIn />
            <p>Ainda não tem conta? <a href="/ManagerSignUp">Cadastre-se</a></p>
        </div>
    );
}
 
export default ManagerLogIn;