import { createContext, useReducer } from "react";

export const FoodBankWorkersContext = createContext();

export const foodBankWorkersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FARMERS':
            return {
                // action.payload is all foodBankWorkers
                foodBankWorkers: action.payload
            }
        case 'SET_FARMER':
            return {
                // action.payload is one foodBankWorker
                foodBankWorkers: action.payload
            }
        case 'CREATE_FARMER':
            return {
                // action.payload is new foodBankWorker, state.foodBankWorkers is past
                // representation of foodBankWorkers
                foodBankWorkers: [action.payload, ...state.foodBankWorkers]
            }
        case 'UPDATE_FARMER':
            return {
                // action.payload is updated foodBankWorker, state.foodBankWorkers is past
                // representation  of foodBankWorkers
                foodBankWorkers: [action.payload, ...state.foodBankWorkers.filter(foodBankWorker =>
                    foodBankWorker._id !== action.payload._id
                )]
            }
        case 'DELETE_FARMER':
            return {
                // action.payload is deleted foodBankWorker, state.foodBankWorkers is past
                // representation of foodBankWorkers
                foodBankWorkers: state.foodBankWorkers.filter(foodBankWorker =>
                    foodBankWorker._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}

export const FoodBankWorkersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(foodBankWorkersReducer, {
        foodBankWorkers: null
    });

    return (
        <FoodBankWorkersContext.Provider value={{...state, dispatch}}>
            {children}
        </FoodBankWorkersContext.Provider>
    )
}