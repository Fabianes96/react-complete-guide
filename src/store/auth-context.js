import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: ()=>{},
    onLogout: ()=>{}
});

export const AuthContextProvider = ({children})=>{
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
        if(storedUserLoggedInInformation === '1'){
          setIsLoggedIn(true);
        }  
      }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email,password)=>{
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true)    }

    const logoutHandler = ()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{children}</AuthContext.Provider>
}
export default AuthContext;