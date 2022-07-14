import LogIn from './components/LogIn';
const CoachLogIn = () => {
    return (
        <div id="log">
        <div className='title'> 
            <h1 className='title'> Portal do professor </h1>
       </div>
            <LogIn />
            <div className='newAccount'> 
                <p>Ainda não tem conta? <a href="/CoachSignUp">Cadastre-se</a></p>
            </div>
        </div>
    );
}
 
export default CoachLogIn;