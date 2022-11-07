import { useContext } from "react";
import { GleaningGroupsContext } from "../context/GleaningGroupsContext";

export const useGleaningGroupsContext = () => {
    const context = useContext(GleaningGroupsContext);
    if (!context) {
        throw Error("useGleaningGroupsContext must be used inside a GleaningGroupsContextProvider");
    }
    return context;
};