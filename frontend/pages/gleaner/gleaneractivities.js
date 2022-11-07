import { useEffect } from "react";

import { useGleaningActivitiesContext } from "../../hooks/useGleaningActivitiesContext";

const GleaningActivities = () => {
    const { gleaningActivities, dispatch } = useGleaningActivitiesContext();

    useEffect(() => {
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

    return (
        <div>
            <h1>Activities page</h1>
            {gleaningActivities && gleaningActivities.map(activity =>
                <div key={activity._id}>
                    <p>{activity.farmer}</p>
                </div>
            )}
            <form>

            </form>
        </div>
    );
}

export default GleaningActivities