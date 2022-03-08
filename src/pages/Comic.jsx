import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import ComicModel from "../model/ComicModel";
import Item from "../components/Item";

const Comic = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`/comics/${params?.id}`);

    let comic = null;
    
    if(data) {
        comic = new ComicModel(data.results[0]);
    }

    return (
        <Item title="Comic" item={comic} error={error} isFetching={isFetching} />
    )
}

export default Comic;