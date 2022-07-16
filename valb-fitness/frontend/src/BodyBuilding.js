import useFetch from "./hooks/useFetch.js"
import Plans from "./components/Plans"
const BODYBUILDING = 1

const BodyBuilding = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    const handleClick = (e) => {
        e.preventDefault();
        console.log(plans[BODYBUILDING])
    }
    return (
        
        <div className="body_building">
            <h1>BodyBuilding</h1>
            <button onClick={handleClick}>Botao</button>  
        </div>
    );
}
 
export default BodyBuilding;