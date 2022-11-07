import { useContext } from "react";
import { FoodBanksContext } from "../context/FoodBanksContext";

export const useFoodBanksContext = () => {
    const context = useContext(FoodBanksContext);
    if (!context) {
        throw Error("useFoodBanksContext must be used inside a FoodBanksContextProvider");
    }
    return context;
};