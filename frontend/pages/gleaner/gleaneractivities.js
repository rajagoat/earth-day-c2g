import { useEffect, useState } from "react";
import Link from "next/link";
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'


import { useGleanersContext } from "../../hooks/useGleanersContext";
import { useGleaningActivitiesContext } from "../../hooks/useGleaningActivitiesContext";

const GleaningActivities = () => {
    const [button, setButton] = useState(true);
    const { gleaners, dispatchGleaners } = useGleanersContext();
    const { gleaningActivities, dispatchGleaningActivities } = useGleaningActivitiesContext();

    const addToDB = async (name, id) => {
        const groupID = {
            gleaningGroup: name
        }
        const response = await fetch("http://localhost:4000/api/gleaningactivity/"+id, {
                    method: 'PUT',
                    body: JSON.stringify(groupID),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        const json = await response.json();
        console.log(json)
        if (response.ok) {
            dispatchGleaners({
                type: "UPDATE_GLEANER",
                payload: json
            })
        }
    }

    useEffect(() => {
        const fetchGleaner = async () => {
            const response = await fetch("http://localhost:4000/api/gleaner/6368a907a83dc6f4db5533d9");
            const json = await response.json();
            if (response.ok) {
                dispatchGleaners({
                    type: "SET_GLEANER",
                    payload: json
                })
            }
        }

        const fetchActivities = async () => {
            const response = await fetch("http://localhost:4000/api/gleaningactivity");
            const json = await response.json();
            if (response.ok) {
                dispatchGleaningActivities({
                    type: 'SET_ACTIVITIES',
                    payload: json
                })
            }
        };

        fetchGleaner();
        fetchActivities();
    }, [dispatchGleaners, dispatchGleaningActivities]);

    return (
        <tbody>
            {gleaningActivities && gleaningActivities.map(activity =>
                 <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <h1 className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.farmer}</h1>
                    </th>
                    
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {activity.createdAt}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.endDate}</td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{activity.streetAddress}, {activity.city}</td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addToDB(gleaners.gleaningGroup, activity._id)}>
                            Volunteer!
                        </button>
                    </td>
                </tr>
            )}
        </tbody>
    );
}

export default GleaningActivities