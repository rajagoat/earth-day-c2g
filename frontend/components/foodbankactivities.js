import { useEffect } from "react";
import Router from 'next/router';

// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { useAuthContext } from '../hooks/useAuthContext';
import { useGleaningActivitiesContext } from "../hooks/useGleaningActivitiesContext";

import Farmer from "../components/Farmer";

const GleaningActivities = () => {
    const { user } = useAuthContext();
    const { gleaningActivities, dispatch } = useGleaningActivitiesContext();

    useEffect(() => {
        if (!user) {
            Router.push("/");
        }
        const fetchActivities = async () => {
            const response = await fetch("http://localhost:4000/api/gleaningactivity");
            const json = await response.json();

            if (response.ok) {
                dispatch({
                    type: 'SET_ACTIVITIES',
                    payload: json
                })
            }
        };

        fetchActivities();
    }, [dispatch]);

    const handleClick = () => {
        Router.push("foodbank/confirmpickup");
    }

    return (
        <tbody>
            {gleaningActivities && gleaningActivities.map(activity =>
                <tr key={activity._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Farmer id={activity.farmer} />
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <h1 className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.typeOfProduce}</h1>
                    </th>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {new Date(activity.endDate).toDateString()}
                    </td>
                    <td className="text-blue-500 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <a
                            href={`http://maps.google.com/?q=${activity.streetAddress},${activity.city}`}
                            target="_blank"
                        >
                            {activity.streetAddress}, {activity.city}
                        </a>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleClick()}
                        >
                            Confirm Pickup
                        </button>
                    </td>
                </tr>
            )}
        </tbody>
    );
}

export default GleaningActivities