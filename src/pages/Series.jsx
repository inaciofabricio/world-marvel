import { useState } from "react";
import useApi from "../hooks/useApi";
import SerieModel from "../model/SerieModel";
import Itens from "../components/Itens";

const Series = () => {

    const limit = 10;
    const offset = 0;
    const [ page, setPage ] = useState(0);
    
    const { data, error, isFetching } = useApi(`/series?limit=${limit}&offset=${offset + (limit * page)}`);    
    
    let series = [];
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
            series.push(new SerieModel(obj));
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
            <Itens title="Series" infos={infos} array={series} link="serie" error={error} isFetching={isFetching} />
        </div>
    )

}

export default Series;