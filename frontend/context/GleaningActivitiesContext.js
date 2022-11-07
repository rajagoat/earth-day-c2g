import { createContext, useReducer } from "react";

export const GleaningActivitiesContext = createContext();

export const gleaningActivitiesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVITIES':
            return {
                // action.payload is all gleaningActivities
                gleaningActivities: action.payload
            }
        case 'SET_ACTIVITY':
            return {
                // action.payload is one gleaningActivity
                gleaningActivities: action.payload
            }
        case 'CREATE_ACTIVITY':
            return {
                // action.payload is new gleaningActivity, state.gleaningActivities is past
                // representation of gleaningActivities
                gleaningActivities: [action.payload, ...state.gleaningActivities]
            }
        case 'UPDATE_ACTIVITY':
            return {
                // action.payload is updated gleaningActivity, state.gleaningActivities is past
                // representation  of gleaningActivities
                gleaningActivities: [action.payload, ...state.gleaningActivities.filter(gleaningActivity =>
                    gleaningActivity._id !== action.payload._id
                )]
            }
        case 'DELETE_ACTIVITY':
            return {
                // action.payload is deleted gleaningActivity, state.gleaningActivities is past
                // representation of gleaningActivities
                gleaningActivities: state.gleaningActivities.filter(gleaningActivity =>
                    gleaningActivity._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}

export const GleaningActivitiesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gleaningActivitiesReducer, {
        gleaningActivities: null
    });

    return (
        <GleaningActivitiesContext.Provider value={{...state, dispatch}}>
            {children}
        </GleaningActivitiesContext.Provider>
    )
}