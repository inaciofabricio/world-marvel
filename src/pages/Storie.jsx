import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import StorieModel from "../model/StorieModel";
import Item from "../components/Item";

const Storie = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`/stories/${params?.id}`);

    let storie = null;
    
    if(data) {
        storie = new StorieModel(data.results[0]);
    }

    return (
        <Item title="Storie" item={storie} error={error} isFetching={isFetching} />
    )
}

export default Storie;