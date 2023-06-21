import axios from 'axios'
import { useState, useEffect } from "react"

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setfetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, { CancelToken: source.token });
                if (isMounted) {
                    setData(response.data);
                    setfetchError(null);
                }
            }
            catch (err) {
                if (isMounted) {
                    setfetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted &&setTimeout(() => setIsLoading(false),2000);
            }
        }
        fetchData(dataUrl);
        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }
        return cleanUp;
    },[dataUrl]);
    return {
        data, fetchError, isLoading
    };
}

export default useAxiosFetch