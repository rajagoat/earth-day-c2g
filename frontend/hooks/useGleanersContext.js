import { useContext } from "react";
import { GleanersContext } from "../context/GleanersContext";

export const useGleanersContext = () => {
    const context = useContext(GleanersContext);
    if (!context) {
        throw Error("useGleanersContext must be used inside a GleanersContextProvider");
    }
    return context;
};