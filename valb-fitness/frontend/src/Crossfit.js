import useFetch from "./hooks/useFetch.js"
import { CrossfitList } from "./helpers/CrossfitList.js";
import Iterator from "./components/Iterator.js";
const CROSSFIT = 1

const Crossfit = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    return (
        
        <div className="body_building">
            <h1>Crossfit</h1>
            {CrossfitList.map((item, key) => {
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