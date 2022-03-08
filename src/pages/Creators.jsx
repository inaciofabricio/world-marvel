import { useState } from "react";
import useApi from "../hooks/useApi";
import CreatorModel from "../model/CreatorModel";
import Itens from "../components/Itens";

const Creators = () => {

    const limit = 10;
    const offset = 0;
    const [ page, setPage ] = useState(0);
    
    const { data, error, isFetching } = useApi(`/creators?limit=${limit}&offset=${offset + (limit * page)}`);    
    
    let creators = [];
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
            creators.push(new CreatorModel(obj));
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
        <Itens title="Creators" infos={infos} array={creators} link="creator" error={error} isFetching={isFetching} />
    )

}

export default Creators;