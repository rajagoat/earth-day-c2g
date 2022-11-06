import { createContext, useReducer } from "react";

export const FarmersContext = createContext();

export const farmersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FARMERS':
            return {
                // action.payload is all farmers
                farmers: action.payload
            }
        case 'SET_FARMER':
            return {
                // action.payload is one farmer
                farmers: action.payload
            }
        case 'CREATE_FARMER':
            return {
                // action.payload is new farmer, state.farmers is past
                // representation of farmers
                farmers: [action.payload, ...state.farmers]
            }
        case 'UPDATE_FARMER':
            return {
                // action.payload is updated farmer, state.farmers is past
                // representation  of farmers
                farmers: [action.payload, ...state.farmers.filter(farmer =>
                    farmer._id !== action.payload._id
                )]
            }
        case 'DELETE_FARMER':
            return {
                // action.payload is deleted farmer, state.farmers is past
                // representation of farmers
                farmers: state.farmers.filter(farmer =>
                    farmer._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}

export const FarmersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(farmersReducer, {
        farmers: null
    });

    return (
        <FarmersContext.Provider value={{...state, dispatch}}>
            {children}
        </FarmersContext.Provider>
    )
}