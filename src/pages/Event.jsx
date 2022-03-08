import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import EventModel from "../model/EventModel";
import Item from "../components/Item";

const Event = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`/series/${params?.id}`);

    let event = null;
    
    if(data) {
        event = new EventModel(data.results[0]);
    }

    return (
        <Item title="Event" item={event} error={error} isFetching={isFetching} />
    )
}

export default Event;