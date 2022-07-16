import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/Login.css";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userAccount = {email, password};
        
        setIsPending(true);
        
        fetch('#', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userAccount)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }
    return (
        <div id='login' > 
            
            <div className="userlogin">
                <form onSubmit={handleSubmit}>
                <div className='field' > 
                        <label>Email:</label>
                        <input 
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                    <div className='field' > 
                    <label>Senha:</label>
                        <input 
                            type="text"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='actions'> 
                        {!isPending && <button>Entrar</button>}
                        {isPending && <button disabled>Entrando ...</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default LogIn;