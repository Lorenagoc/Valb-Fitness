import useFetch from "./hooks/useFetch.js"
import { RhythmList } from "./helpers/RhythmList.js";
import Iterator from "./components/Iterator.js";
const RHYTHM = 1

const Rhythm = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    return (
        
        <div className="body_building">
            <h1>Ritmos</h1>
            {RhythmList.map((item, key) => {
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
 
export default Rhythm;