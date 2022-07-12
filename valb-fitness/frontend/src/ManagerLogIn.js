import LogIn from './components/LogIn';
const ManagerLogIn = () => {
    return (
        <div className="userlogin">
            <LogIn />
            <p>Ainda não tem conta? <a href="#">Cadastra-se</a></p>
        </div>
    );
}
 
export default ManagerLogIn;