const Prices = (props) => {
    return (
        <div className="details__infos___item">
            <h3>Prices:</h3>
            <div className="info__bloco">
                {
                    props?.prices.map((obj, x) => {
                        return (
                            <div key={x}>
                                <span>- { obj?.type }: ${ obj?.price }</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Prices;