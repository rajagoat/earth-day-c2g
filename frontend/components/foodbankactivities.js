import { useEffect } from "react";
import Link from "next/link";
import Router from 'next/router';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { useAuthContext } from '../hooks/useAuthContext';
import { useGleaningActivitiesContext } from "../hooks/useGleaningActivitiesContext";

const GleaningActivities = () => {
    const { user } = useAuthContext();
    const { gleaningActivities, dispatch } = useGleaningActivitiesContext();

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch("http://localhost:4000/api/gleaningactivity");
            const json = await response.json();

            if (response.ok) {
                dispatch({
                    type: 'SET_ACTIVITIES',
                    payload: json.filter(activity =>
                        activity.foodBank === user?._id
                    )
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
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <h1 className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.foodBank}</h1>
                    </th>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {activity.createdAt}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.endDate}</td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.streetAddress}, {activity.city}</td>
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