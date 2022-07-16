import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isDiff, setIsDiff] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === password2) {
      setIsDiff(false);
      const userAccount = { email, password, password2 };
      setIsPending(true);
      fetch("#", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userAccount),
      }).then(() => {
        setIsPending(false);
        history.push("/");
      });
    } else {
      setIsPending(false);
      setIsDiff(true);
    }
  };
  return (
    <div id="login">    
      <div className="userlogin">
        <h2>Criar Conta</h2>
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
          <label>Confirme Sua Senha:</label>
          <input
            type="text"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {isDiff && <p>Senhas são diferentes</p>}
          {!isPending && <button>Entrar</button>}
          {isPending && <button disabled>Entrando ...</button>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
