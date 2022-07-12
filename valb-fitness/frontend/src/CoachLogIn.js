import LogIn from './components/LogIn';
const CoachLogIn = () => {
    return (
        <div className="coachlogin">
            <LogIn />
            <p>Ainda não tem conta? <a href="/CoachSignUp">Cadastre-se</a></p>
        </div>
    );
}
 
export default CoachLogIn;