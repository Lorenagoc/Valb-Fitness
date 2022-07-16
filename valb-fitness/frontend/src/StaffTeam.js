import "./styles/Team.css";
import { StaffTeamList } from "./helpers/StaffTeamList.js";
import Item from "./components/Item.js";

const StaffTeam = () => {
    return (
        <div className="team">
            <h1>Escolha sua categoria</h1>
            <div className="team3List">
                {StaffTeamList.map((item, key) => {
                    return (
                        <Item
                        key={key}
                        image={item.image}
                        name={item.name}
                        enName={item.enName}
                        />
                    );  
                })}
            </div>
        </div>
    );
}
 
export default StaffTeam;