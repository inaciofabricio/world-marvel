import { Link } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Info = (props) => {
    return (
        <div className="details__infos___item">
            <h3>{props?.titulo}</h3>
            { 
                props?.data?.length === 0 
                && 
                <div>
                    <div >
                        <span >...</span>
                    </div>
                </div>
            }
            { 
                props?.data?.length > 0 
                && 
                <div className="info__bloco">
                {
                    props?.data.map((obj, x) => {
                        return (
                            <div key={x}>
                                - <Link className="details__infos___link" to={`/${props?.path}/${obj?.id}`}>{obj?.name}  <FontAwesomeIcon icon={faEye} /></Link>
                            </div>
                        )
                    })
                }                                    
                </div>
            }
        </div>
    );
}

export default Info;