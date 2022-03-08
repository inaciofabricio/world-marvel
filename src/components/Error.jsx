const Error = (props) => {
    return (
        <div>
            <div className="error">
                <span >{props?.error?.message}</span>
            </div>
        </div>
    );
}

export default Error;