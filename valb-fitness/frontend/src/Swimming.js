import useFetch from "./hooks/useFetch.js"
import { SwimmingList } from "./helpers/SwimmingList.js";
import Iterator from "./components/Iterator.js";
const SWIMMING = 1

const Swimming = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    return (
        
        <div className="swimming">
            <h1>Natação</h1>
            {SwimmingList.map((item, key) => {
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
 
export default Swimming;