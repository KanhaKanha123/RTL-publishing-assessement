import { useEffect, useReducer, useRef, useState } from 'react';
import { formatData } from '../helpers/formatData';
import { InitialState, articleReducer } from '../store/reducers/articleReducer';
import { getFetchApi } from './services/fetchData';

//custom hook to manage api call to get data
const useFetchData = () => {

    const [state, dispatch] = useReducer(articleReducer, InitialState);
    const [apiUrl, setApiUrl] = useState("bundle-api.json");

    let firstUpdate = useRef<Boolean>(false);

    const getData = async (apiUrl: string) => {
        try {
            //with axios test runner was having some issues so i use fetch here
            getFetchApi(apiUrl).then(res => res.json()).then(res => {
                dispatch({ type: "DATA_SUCCESS", payload: formatData(res) });
            }).catch(err => {
                dispatch({ type: "DATA_ERROR", payload: err });
            });
        } catch (err) {
            console.error(err);
        }

    };

    useEffect(() => {
        try {
            //react 18 re mount the component, so to call only once maintating by useref
            if (!firstUpdate.current) {
                getData(apiUrl);
            }
            firstUpdate.current = true;
        } catch (err) {
            console.error(err);
        }
    }, [apiUrl]);

    return { state, setApiUrl };
}

export default useFetchData;