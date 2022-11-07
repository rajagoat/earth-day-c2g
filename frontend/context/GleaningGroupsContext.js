import { createContext, useReducer } from "react";

export const GleaningGroupsContext = createContext();

export const gleaningGroupsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FARMERS':
            return {
                // action.payload is all gleaningGroups
                gleaningGroups: action.payload
            }
        case 'SET_FARMER':
            return {
                // action.payload is one gleaningGroup
                gleaningGroups: action.payload
            }
        case 'CREATE_FARMER':
            return {
                // action.payload is new gleaningGroup, state.gleaningGroups is past
                // representation of gleaningGroups
                gleaningGroups: [action.payload, ...state.gleaningGroups]
            }
        case 'UPDATE_FARMER':
            return {
                // action.payload is updated gleaningGroup, state.gleaningGroups is past
                // representation  of gleaningGroups
                gleaningGroups: [action.payload, ...state.gleaningGroups.filter(gleaningGroup =>
                    gleaningGroup._id !== action.payload._id
                )]
            }
        case 'DELETE_FARMER':
            return {
                // action.payload is deleted gleaningGroup, state.gleaningGroups is past
                // representation of gleaningGroups
                gleaningGroups: state.gleaningGroups.filter(gleaningGroup =>
                    gleaningGroup._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}

export const GleaningGroupsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gleaningGroupsReducer, {
        gleaningGroups: null
    });

    return (
        <GleaningGroupsContext.Provider value={{...state, dispatch}}>
            {children}
        </GleaningGroupsContext.Provider>
    )
}