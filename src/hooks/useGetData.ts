import { useEffect, useReducer, useRef } from 'react';
import { InitialState, articleReducer } from '../store/reducers/ArticleReducer';
import { getFetchApi } from './api/api';

//custom hook to manage api call to get data
const useGetData = () => {
    const [state, dispatch] = useReducer(articleReducer, InitialState)

    let calledOnce = useRef<Boolean>(false);

    const getData = async () => {
        //with axios test runner was having some issues so i use fetch here
        getFetchApi().then(res => {
            console.log(res)
            dispatch({ type: "DATA_SUCCESS", payload: formatData(res) });
        }).catch(err => {
            dispatch({ type: "DATA_ERROR", payload: err });
        });
    };

    //format data, just keep neccessary fields from big object
    const formatData = (articleRawData: any) => {
        const neccessaryDataMaped = articleRawData.bundelItems.map((item: any) => ({
            afbeelding: item.afbeelding.afbeelding,
            urlAlias: item.urlAlias,
            labelValue: item.labelValue,
            title: item.title,
            lead: item.lead,
            formatted: item.aangemaaktDatum.formatted
        }));

        return {
            title: articleRawData.title,
            label: articleRawData.label,
            description: articleRawData.description,
            image: articleRawData.image.imageUrl,
            bundelItems: neccessaryDataMaped
        }
    };

    useEffect(() => {
        try {
            //react 18 re mount the component, so to call only once maintating by useref
            if (!calledOnce.current) {
                getData();
            }
            calledOnce.current = true;
        } catch (err) {
            console.error(err);
        }
    }, []);

    return [state];
}

export default useGetData;