import React, {useState} from "react"

const AuthContext = React.createContext({
token:'',
isLoggedIn : false,
login:(token)=>{},
logout:()=>{}
});

export const AuthContextProvider = (props) =>{

    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token;

    const loginHandle = (token) =>{
        localStorage.setItem('token' , token);
        setToken(token);

        setTimeout(() => {
            alert("1 minute has passed!");
            localStorage.removeItem('token');
            setToken(null);


            // You can add more actions here
          }, 30000);
    };
    const logoutHandler = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn : userIsLoggedIn,
        login:loginHandle,
        logout:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}

    </AuthContext.Provider>
};

export default AuthContext;
