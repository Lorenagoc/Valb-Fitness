import useFetch from "./hooks/useFetch.js"
import { BodyBuildingList } from "./helpers/BodyBuildingList.js";
import Iterator from "./components/Iterator.js";
const BODYBUILDING = 1

const BodyBuilding = () => {
    const {data: plans, isPending, error } = useFetch('http://localhost:3001/Planos');
    return (
        
        <div className="body_building">
            <h1>BodyBuilding</h1>
            {BodyBuildingList.map((item, key) => {
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
 
export default BodyBuilding;