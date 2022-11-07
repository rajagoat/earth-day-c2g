import { useEffect } from "react";
import Router from "next/router";

import { CheckRating } from "./Ratings";
import { Foodbankinfo } from "./Foodbankinfo";

import { useAuthContext } from '../hooks/useAuthContext';
import { useGleaningActivitiesContext } from "../hooks/useGleaningActivitiesContext";

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
                    payload: json.filter(activity =>
                        activity.farmer === user?._id
                    )
                })
            }
        };

        fetchActivities();
    }, [dispatch]);

    return (
        <tbody>
            {gleaningActivities && gleaningActivities.map(activity =>
                <tr key={activity._id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <h1 className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.typeOfProduce}</h1>
                    </th>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {new Date(activity.createdAt).toDateString()}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{new Date(activity.endDate).toDateString()}</td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.streetAddress}, {activity.city}</td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.status}</td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View
                        </button>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <CheckRating />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Foodbankinfo />
                    </td>
                </tr>
            )}
        </tbody>
    );
}

export default GleaningActivities