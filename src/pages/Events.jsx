import { useState } from "react";
import useApi from "../hooks/useApi";
import Itens from "../components/Itens";
import EventModel from "../model/EventModel";

const Events = () => {

    const limit = 10;
    const offset = 0;
    const [ page, setPage ] = useState(0);
    
    const { data, error, isFetching } = useApi(`/events?limit=${limit}&offset=${offset + (limit * page)}`);    
    
    let events = [];
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
            events.push(new EventModel(obj));
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
        <Itens title="Events" infos={infos} array={events} link="event" error={error} isFetching={isFetching} />
    )

}

export default Events;