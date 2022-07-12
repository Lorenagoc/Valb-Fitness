import LogIn from './components/LogIn';
const UserLogIn = () => {
    return (
        <div className="userlogin">
            <LogIn />
            <p>Ainda não tem conta? <a href="/UserSignUp">Cadastre-se</a></p>
        </div>
    );
}
 
export default UserLogIn;