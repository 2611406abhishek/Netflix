
import AuthReducer from "./AuthReducer";
import {createContext, useEffect, useReducer} from "react";
const INITIAL_STATE={
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    isFetching:false,
    error:false,
}

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = (props) =>{
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    useEffect(()=>{

        // using localstorage so that we don't have to login again and again 
        localStorage.setItem("user",JSON.stringify(state.user));
             
    },[state.user]);
       
    return (
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
    
}