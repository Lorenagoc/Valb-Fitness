import useFetch from "./hooks/useFetch.js"
import { GenericList } from "./helpers/GenericList.js";
import Iterator from "./components/Iterator.js";
const CROSSFIT = 1

const Crossfit = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    return (
        
        <div className="crossfit">
            <h1>Crossfit</h1>
            {GenericList.map((item, key) => {
                return (
                    <Iterator
                    key={key}
                    mensal={item.mensal}
                    semestral={item.semestral}
                    anual={item.anual}
                    />
                );  

            })}
        </div>
    );
}
 
export default Crossfit;