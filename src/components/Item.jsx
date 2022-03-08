import Dates from "./Dates"
import Error from "./Error"
import Fetching from "./Fetching"
import Info from "./Info"
import Prices from "./Prices"
import imgNotAvailabe from "../assets/img/image_not_available.jpg"

const Item = (props) => {
    console.log(props);
    return (
        <div className="details">
            <div className="h1">{ props?.title }</div>
            { 
                props?.isFetching && <Fetching />
            }
            { 
                props?.error && <Error error={props?.error} />             
            }
            {
                !props?.isFetching && !props?.error &&
                <>
                    <div className="titulo">{props?.item?.name}</div>
                    <div>
                        <img className="img" src={props?.item?.thumbnail ? props?.item?.thumbnail : imgNotAvailabe} alt="..."></img>
                    </div>
                    <div className="details__infos">
                        { props?.item?.prices && props?.item?.prices?.length > 0 && <Prices prices={props?.item?.prices} /> }
                        { props?.item?.dates &&  props?.item?.dates?.length > 0 && <Dates dates={props?.item?.dates} /> }
                        { props?.item?.characters && props?.item?.characters?.length > 0 && <Info titulo="Characters" path="character" data={props?.item?.characters}></Info> }
                        { props?.item?.creators && props?.item?.creators?.length > 0 && <Info titulo="Creators" path="creator" data={props?.item?.creators}></Info> }
                        { props?.item?.comics && props?.item?.comics?.length > 0 && <Info titulo="Comics" path="comic" data={props?.item?.comics}></Info> }
                        { props?.item?.series && props?.item?.series?.length > 0 && <Info titulo="Series" path="serie" data={props?.item?.series}></Info> }
                        { props?.item?.events && props?.item?.events?.length > 0 && <Info titulo="Events" path="event" data={props?.item?.events}></Info> }
                        { props?.item?.stories && props?.item?.stories?.length > 0 && <Info titulo="Stories" path="storie" data={props?.item?.stories}></Info> }
                    </div>
                </>
            }
        </div>
    )
}

export default Item;