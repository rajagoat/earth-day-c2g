// NOTE:
// This file is for TESTING ONLY, not one of the actual routes.

import { useEffect } from "react";

// hooks
import { useFarmersContext } from "../hooks/useFarmersContext";

const Farmers = () => {
    const { farmers, dispatch } = useFarmersContext();

    useEffect(() => {
        const fetchFarmers = async () => {
            const response = await fetch("http://localhost:4000/api/farmer");
            const json = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'SET_FARMERS',
                    payload: json
                })
            }
        };

        fetchFarmers();
    }, [dispatch]);

    const handleDelete = async (_id) => {
        const response = await fetch("http://localhost:4000/api/farmer/" + _id, {
            method: 'DELETE'
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_FARMER', payload: json })
        }
    }

    const handleUpdate = async (_id) => {
        const farmer = {
            lastName: "hard"
        };
        const response = await fetch("http://localhost:4000/api/farmer/" + _id, {
            method: 'PUT',
            body: JSON.stringify(farmer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({type: 'UPDATE_FARMER', payload: json});
        }
    }

    return (
        <div>
            <h1>Farmers page</h1>
            {farmers && farmers.map(farmer =>
                <div key={farmer._id}>
                    <p>{farmer.firstName}</p>
                    <p>{farmer.lastName}</p>
                    <span style={{ color: "red" }} onClick={() => handleDelete(farmer._id)}>Delete</span>
                    <p style={{ color: "blue" }} onClick={() => handleUpdate(farmer._id)}>Update</p>
                </div>
            )}
            <form>

            </form>
        </div>
    );
}

export default Farmers;