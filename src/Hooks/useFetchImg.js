import {useEffect,useState} from 'react';
import { getImg } from '../helpers/GetImg';

export const useFetchImg = (nom)=>{

    const [State, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {
            getImg(nom).then( v => setState({
                data: v,
                loading: false
            }));
        }, 3000);
    }, [nom]);

    return State;

}