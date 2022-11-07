import { useEffect } from "react";
import {useFarmersContext} from "../hooks/useFarmersContext";

const Farmer = ({ id }) => {
    const { farmers, dispatch } = useFarmersContext();

    useEffect(() => {
        const fetchFarmer = async () => {
            const response = await fetch("http://localhost:4000/api/farmer/" + id);
            const json = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'SET_FARMER',
                    payload: json
                })
            }
        }

        fetchFarmer();
    }, []);

    return (
        <>
            {`${farmers?.firstName} ${farmers?.lastName}`}
        </>
    );
}

export default Farmer;