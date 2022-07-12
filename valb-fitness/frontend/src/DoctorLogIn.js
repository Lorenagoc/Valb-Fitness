import LogIn from './components/LogIn';
const DoctorLogIn = () => {
    return (
        <div className="doctorlogin">
            <LogIn />
            <p>Ainda não tem conta? <a href="/DoctorSignUp">Cadastre-se</a></p>
        </div>
    );
}
 
export default DoctorLogIn;