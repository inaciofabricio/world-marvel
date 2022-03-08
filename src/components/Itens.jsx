import { Link } from "react-router-dom";
import Error from "./Error";
import Fetching from "./Fetching";
import imgNotAvailabe from "../assets/img/image_not_available.jpg"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Itens = (props) => {
    return (
        <>
            <div className="h1">
                <div>{props?.title}</div>
            </div>
            {
                props?.infos && 
                <div className="results">
                    <span>{`Results: ${props?.infos?.startPage} ... ${props?.infos?.endPage} / ${props?.infos?.total}`}</span>
                </div>
            }
            <div className="itens">
                { 
                    props?.isFetching && <Fetching />
                }
                { 
                    props?.error && <Error error={props?.error} />             
                }
                { 
                    !props?.isFetching && !props?.error && props?.array.length === 0 && <div>Sem resultados!</div>
                }
                { 
                    !props?.isFetching && !props?.error &&
                    props?.array.map((obj, x) => {
                        return (
                            <div key={x}>
                                <div className="objeto">
                                    { obj?.name !== "..." && <div className="titulo">{obj?.name}</div>}
                                    { obj?.title !== "..." && <div className="titulo">{obj?.title}</div>}
                                    <div>
                                        <img className="img" src={obj?.thumbnail ? obj?.thumbnail : imgNotAvailabe} alt="..."></img>
                                    </div>
                                    <Link className="btn" to={`/${props?.link}/${obj?.id}`}>Details</Link>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
                
            </div>
            {
                !props?.isFetching && !props?.error &&
                <div className="btns">
                    <button className="btn-seta" onClick={props?.infos?.anterior} disabled={(props?.infos?.offset + (props?.infos?.limit * props?.infos?.page)) < 1 ? true : false}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <span className="page">{ props?.infos?.page + 1 }</span>
                    <button className="btn-seta" onClick={props?.infos?.proximo} disabled={props?.infos?.isFetching}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            }
        </>
    )
}

export default Itens;