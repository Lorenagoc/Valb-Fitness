import useFetch from "./hooks/useFetch.js"
import { SpinningList } from "./helpers/SpinningList.js";
import Iterator from "./components/Iterator.js";
const Spinning = 1

const Spinning = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    return (
        
        <div className="spinning">
            <h1>Spinning</h1>
            {SpinningList.map((item, key) => {
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
 
export default Spinning;