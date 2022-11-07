import { useEffect } from "react";

import { useGleaningActivitiesContext } from "../../hooks/useGleaningActivitiesContext";

const GleaningActivities = () => {
    const { activities, dispatch } = useGleaningActivitiesContext();

    useEffect(() => {
        const fetchactivities = async () => {
            const response = await fetch("http://localhost:4000/api/gleaningactivity");
            const json = await response.json();
            if (response.ok) {
                dispatch({
                    type: 'SET_ACTIVITIES',
                    payload: json
                })
            }
        };

        fetchactivities();
    }, [dispatch]);

    return (
        <div>
            <h1>Activities page</h1>
            {activities && activities.map(activities =>
                <div key={activities._id}>
                    <p>{activities.farmer}</p>
                </div>
            )}
            <form>

            </form>
        </div>
    );
}

export default GleaningActivities