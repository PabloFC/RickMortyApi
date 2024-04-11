/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState, useContext} from 'react';

const AuthContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export default function AuthContextProvider({children}){
    const [auth, setAuth] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    function login(user){
        if(user.email === "pablo@gmail.com" && user.password === "1234"){
            setAuth(user);
            setErrorMessage("")
        } else {
            setErrorMessage("Error a introducir credenciales!")
        }
    }

    function logout(){
        setAuth(null)
    }

    const value ={
    auth,
    login,
    logout,
    errorMessage
}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}


export const useAuthContext = () => {
    return useContext(AuthContext);
}
