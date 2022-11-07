import { useContext } from "react";
import { FoodBankWorkersContext } from "../context/FoodBankWorkersContext";

export const useFoodBankWorkersContext = () => {
    const context = useContext(FoodBankWorkersContext);
    if (!context) {
        throw Error("useFoodBankWorkersContext must be used inside a FoodBankWorkersContextProvider");
    }
    return context;
};