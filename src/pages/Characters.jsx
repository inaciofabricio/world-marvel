import { useState } from "react";
import useApi from "../hooks/useApi";
import CharacterModel from "../model/CharacterModel";
import Itens from "../components/Itens";

const Characters = () => {

    const limit = 10;
    const offset = 0;
    const [ page, setPage ] = useState(0);
    
    const { data, error, isFetching } = useApi(`/characters?limit=${limit}&offset=${offset + (limit * page)}`);    
    
    let characters = [];
    let infos = null;
    
    if(data) {

        infos = {
            page: page,
            limit: limit,
            offset: offset,
            startPage: ((page + 1) * limit) - (limit - 1),
            endPage: (page + 1) * limit,
            total: data?.total,
            proximo: proximo,
            anterior: anterior
        }

        data?.results.forEach(obj => {
            characters.push(new CharacterModel(obj));
        });
    }

    function proximo() {
        window.scrollTo(0, 0);
        setPage(page + 1);
    }

    function anterior() {
        if(page > 0) {
            window.scrollTo(0, 0);
            setPage(page - 1);
        }
    }

    return (
        <div>
            <Itens title="Characters" infos={infos} array={characters} link="character" error={error} isFetching={isFetching} />
        </div>
    )
}

export default Characters;