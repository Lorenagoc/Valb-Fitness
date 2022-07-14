import LogIn from './components/LogIn';
const DoctorLogIn = () => {
    return (
        <div id="log">
             <div className='title'> 
                 <h1 className='title'> Portal do médico </h1>
            </div>
            <LogIn />
        <div className='newAccount'> 
            <p>Ainda não tem conta? <a href="/DoctorSignUp">Cadastre-se</a></p>
            </div>
        </div>
    );
}
 
export default DoctorLogIn;