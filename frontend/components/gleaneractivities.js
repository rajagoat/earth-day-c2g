import { useEffect } from "react";
import Router from "next/router";

import { useAuthContext } from '../hooks/useAuthContext';
import { useGleanersContext } from "../hooks/useGleanersContext";
import { useGleaningActivitiesContext } from "../hooks/useGleaningActivitiesContext";

import Farmer from "../components/Farmer";

const GleaningActivities = () => {
    const { user } = useAuthContext();
    const { gleaners, dispatch } = useGleanersContext();
    const { gleaningActivities, dispatch: gleaningActivitiesDispatch } = useGleaningActivitiesContext();

    const addToDB = async (name, id) => {
        const groupID = {
            gleaningGroup: name
        }
        const response = await fetch("http://localhost:4000/api/gleaningactivity/" + id, {
            method: 'PUT',
            body: JSON.stringify(groupID),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (response.ok) {
            gleaningActivitiesDispatch({
                type: "UPDATE_ACTIVITY",
                payload: json
            })
        }
    }

    useEffect(() => {
        if (!user) {
            Router.push("/");
        }

        const fetchGleaner = async () => {
            const response = await fetch("http://localhost:4000/api/gleaner/" + user?._id);
            const json = await response.json();
            if (response.ok) {
                dispatch({
                    type: "SET_GLEANER",
                    payload: json
                })
            }
        }

        const fetchActivities = async () => {
            const response = await fetch("http://localhost:4000/api/gleaningactivity");
            const json = await response.json();
            if (response.ok) {
                gleaningActivitiesDispatch({
                    type: 'SET_ACTIVITIES',
                    payload: json
                })
            }
        };

        fetchGleaner();
        fetchActivities();
    }, [dispatch, gleaningActivitiesDispatch]);

    return (
        <tbody>
            {gleaningActivities && gleaningActivities.map(activity =>
                <tr key={activity._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Farmer id={activity.farmer} />
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <h1 className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.typeOfProduce}</h1>
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {new Date(activity.createdAt).toDateString()}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{new Date(activity.endDate).toDateString()}</td>
                    <td className="text-blue-500 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <a
                            href={`http://maps.google.com/?q=${activity.streetAddress},${activity.city}`}
                            target="_blank"
                        >
                            {activity.streetAddress}, {activity.city}
                        </a>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {activity?.gleaningGroup === gleaners?.gleaningGroup ?
                            <button
                                disabled={true}
                                className="bg-white text-red-500 font-bold py-2 px-4 rounded"
                            >
                                Request Sent
                            </button>
                            :
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => addToDB(gleaners.gleaningGroup, activity._id)}
                            >
                                Volunteer!
                            </button>}
                    </td>
                </tr>
            )}
        </tbody>
    );
}

export default GleaningActivities