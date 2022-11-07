import { useEffect, useState } from "react";
import {useFarmersContext} from "../hooks/useFarmersContext";

const Farmer = ({ id }) => {
    const { dispatch } = useFarmersContext();
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchFarmer = async () => {
            const response = await fetch("http://localhost:4000/api/farmer/" + id);
            const json = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'SET_FARMER',
                    payload: json
                })
                setName(json.firstName + ' ' + json.lastName);
            }
        }

        fetchFarmer();
    }, []);

    return (
        <>
            {name}
        </>
    );
}

export default Farmer;