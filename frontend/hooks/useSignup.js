import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const { authDispatch } = useAuthContext();

    const signup = async (email, password, confirmPassword, typeOfUser) => {
        setError(null);
        if (password != confirmPassword) {
            setError('Passwords Mismatch');
        }
        else if (!typeOfUser) {
            setError("Please select what type of user you are.");
        }
        else {
            const response = await fetch("http://localhost:4000/api/user/signup", {
                method: 'POST',
                body: JSON.stringify({ email, password, typeOfUser }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            if (!response.ok) {
                setError(json.error);
            } else {
                // save user to localStorage
                localStorage.setItem('user', JSON.stringify(json))

                // update AuthContext
                authDispatch({
                    type: 'LOGIN',
                    payload: json
                })
            }
        }
    }
    return { signup, error }
}