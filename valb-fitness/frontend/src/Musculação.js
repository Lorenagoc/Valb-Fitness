import useFetch from "./hooks/useFetch.js"
import Planos from "./components/Planos"
const MUSCULACAO = 1

const Musculação = () => {
    const {data: planos, isPending, error } = useFetch('http://localhost:3001/Planos');
    const handleClick = (e) => {
        e.preventDefault();
        console.log(planos[MUSCULACAO][0]["mensal"]["parcelas"])
        
      }
    return (
        
        <div className="workout">
            <h1>Musculação</h1>
            <button onClick={handleClick}>Botao</button>

         
            
        </div>
    );
}
 
export default Musculação;