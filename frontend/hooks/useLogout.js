import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { authDispatch } = useAuthContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        authDispatch({type: 'LOGOUT'})

        return {logout}
    }
}