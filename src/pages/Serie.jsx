import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import SerieModel from "../model/SerieModel";
import Item from "../components/Item";

const Serie = () => {

    let params = useParams();
    const { data, error, isFetching } = useApi(`/series/${params?.id}`);

    let serie = null;
    
    if(data) {
        serie = new SerieModel(data.results[0]);
    }

    return (
        <Item title="Serie" item={serie} error={error} isFetching={isFetching} /> 
    )
}

export default Serie;