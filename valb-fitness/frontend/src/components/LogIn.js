import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
        <div className="userlogin">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Senha:</label>
                <input 
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isPending && <button>Entrar</button>}
                {isPending && <button disabled>Entrando ...</button>}
            </form>
        </div>
    );
}
 
export default LogIn;