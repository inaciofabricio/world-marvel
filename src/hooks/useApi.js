import axios from "axios";
import { useEffect, useState } from "react";
import md5 from 'md5';

const ts = new Date().getTime();
const publicKey = "d4edcf55dcd2afab65624a8dc3369a7a";
const privateKey = "83f23ab6243df1664caf616d19bc48e269f058df";
const hash = md5(ts+privateKey+publicKey).toString();

const api = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public/"
});

api.interceptors.request.use((req) =>{
    req.url = `${req.url}${getComplementUrl(req)}ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    return req;
});

function getComplementUrl(req) {
    return req.url.includes("/characters?") || 
        req.url.includes("/creators?") || 
        req.url.includes("/comics?") || 
        req.url.includes("/series?") ||
        req.url.includes("/events?") ||
        req.url.includes("/stories?") ? "&" : "?";
}

export default function useApi(url) {

    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        api.get(url)
            .then(response => {
                setData(response.data.data);
            })
            .catch((err) => {
                console.log(err.response)
                if(err && err.response && err.response.data) {
                    const { status: message, code: status } = err.response.data;
                    setError({ message, status });
                } else {
                    const { statusText: message, status } = err.response;
                    setError({ message, status });
                }
            })
            .finally(() => {
                setIsFetching(false);
            });

    }, [url]);

    return { data, error, isFetching };
}