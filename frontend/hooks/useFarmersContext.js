import { useContext } from "react";
import { FarmersContext } from "../context/FarmersContext";

export const useFarmersContext = () => {
    const context = useContext(FarmersContext);
    if (!context) {
        throw Error("useFarmersContext must be used inside a FarmersContextProvider");
    }
    return context;
};