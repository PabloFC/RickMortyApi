/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState, useContext, useEffect} from 'react';


const AuthContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export default function AuthContextProvider({children}){

    let userStore=JSON.parse(localStorage.getItem("user")) || null;

    const [auth, setAuth] = useState(userStore);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(auth));
        }, [auth]);
        
    

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
        localStorage.removeItem("user")
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
