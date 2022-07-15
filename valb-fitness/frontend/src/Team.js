import "./styles/Team.css";
import { TeamList } from "./helpers/TeamList.js";
import Item from "./components/Item.js";

const Team = () => {
    return (
        <div className="team">
            <h1>Escolha sua categoria</h1>
            <div className="team2List">
                {TeamList.map((item, key) => {
                    return (
                        <Item
                        key={key}
                        image={item.image}
                        name={item.name}
                        />
                    );  

                })}
            </div>
        </div>
    );
}
 
export default Team;