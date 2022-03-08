import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import CharacterModel from "../model/CharacterModel";
import Item from "../components/Item";

const Character = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`/characters/${params?.id}`);
    let character = null;
    
    if(data) {
        character = new CharacterModel(data.results[0]);
    }
    
    return (
        <Item title="Character" item={character} error={error} isFetching={isFetching} />
    )
}

export default Character;