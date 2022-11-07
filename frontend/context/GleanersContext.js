import { createContext, useReducer } from "react";

export const GleanersContext = createContext();

export const gleanersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GLEANERS':
            return {
                // action.payload is all gleaners
                gleaners: action.payload
            }
        case 'SET_GLEANER':
            return {
                // action.payload is one farmer
                gleaners: action.payload
            }
        case 'CREATE_GLEANER':
            return {
                // action.payload is new farmer, state.gleaners is past
                // representation of gleaners
                gleaners: [action.payload, ...state.gleaners]
            }
        case 'UPDATE_GLEANER':
            return {
                // action.payload is updated farmer, state.gleaners is past
                // representation  of gleaners
                gleaners: [action.payload, ...state.gleaners.filter(farmer =>
                    farmer._id !== action.payload._id
                )]
            }
        case 'DELETE_GLEANER':
            return {
                // action.payload is deleted farmer, state.gleaners is past
                // representation of gleaners
                gleaners: state.gleaners.filter(farmer =>
                    farmer._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}

export const GleanersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gleanersReducer, {
        gleaners: null
    });

    return (
        <GleanersContext.Provider value={{...state, dispatch}}>
            {children}
        </GleanersContext.Provider>
    )
}