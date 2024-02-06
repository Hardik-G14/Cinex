import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async(url) =>{
            setLoading("Loading...");
            setData(null);
            setError(null);
            try{
                const res = await fetchDataFromApi(url);
                console.log(res);
                setData(res);
            }catch(err){
                setError("Something went wrong!");
            }
            setLoading(false);
        };

        fetchData(url);
        // setLoading("loading...");
        // setData(null);
        // setError(null);

        // fetchDataFromApi(url)
        //     .then((res) => {
        //         setLoading(false);
        //         setData(res);
        //     })
        //     .catch((err) => {
        //         setLoading(false);
        //         setError("Something went wrong!");
        //     });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;