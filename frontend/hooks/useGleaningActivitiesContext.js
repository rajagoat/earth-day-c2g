import { useContext } from "react";
import { GleaningActivitiesContext } from "../context/GleaningActivitiesContext";

export const useGleaningActivitiesContext = () => {
    const context = useContext(GleaningActivitiesContext);
    if (!context) {
        throw Error("useGleaningActivitiesContext must be used inside a GleaningActivitiesContextProvider");
    }
    return context;
};