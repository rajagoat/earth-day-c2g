import { createContext, useReducer } from "react";

export const FoodBanksContext = createContext();

export const foodBanksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FARMERS':
            return {
                // action.payload is all food banks
                foodBanks: action.payload
            }
        case 'SET_FARMER':
            return {
                // action.payload is one food bank
                foodBanks: action.payload
            }
        case 'CREATE_FARMER':
            return {
                // action.payload is new food bank, state.foodBanks is past
                // representation of food banks
                foodBanks: [action.payload, ...state.foodBanks]
            }
        case 'UPDATE_FARMER':
            return {
                // action.payload is updated food bank, state.foodBanks is past
                // representation of food banks
                foodBanks: [action.payload, ...state.foodBanks.filter(foodBank =>
                    foodBank._id !== action.payload._id
                )]
            }
        case 'DELETE_FARMER':
            return {
                // action.payload is deleted food bank, state.foodBanks is past
                // representation of food banks
                foodBanks: state.foodBanks.filter(foodBank =>
                    foodBank._id !== action.payload._id
                )
            }
        default:
            return state;
    }
}

export const FoodBanksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(foodBanksReducer, {
        foodBanks: null
    });

    return (
        <FoodBanksContext.Provider value={{...state, dispatch}}>
            {children}
        </FoodBanksContext.Provider>
    )
}