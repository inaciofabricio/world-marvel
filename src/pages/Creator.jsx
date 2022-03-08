import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import CreatorModel from "../model/CreatorModel";
import Item from "../components/Item";

const Creator = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`/creators/${params?.id}`);

    let creator = null;
    
    if(data) {
        creator = new CreatorModel(data.results[0]);
    }

    return (
        <Item title="Creator" item={creator} error={error} isFetching={isFetching} />
    )
}

export default Creator;