const Dates = (props) => {
    return (
        <div className="details__infos___item">
            <h3>Dates:</h3>
            <div className="info__bloco">
                {
                    props?.dates.map((obj, x) => {
                        return (
                            <div key={x}>
                                <span>- { obj?.type }: { obj?.date }</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Dates;