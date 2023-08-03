import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListFailure, getListStart, getListSuccess } from "./ListActions";
export const getLists = async (dispatch) =>{
    dispatch(getListStart())

    try{
       const res = await axios.get("/lists",{
        headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
       });

       dispatch(getListSuccess(res.data));
    }catch(err)
    {
        dispatch(getListFailure());
    }

}

// delete
export const deleteList = async (id,dispatch) =>{
    dispatch(deleteListStart())

    try{
        await axios.delete("/lists/"+id,{
        headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
       });
       dispatch(deleteListSuccess(id))
    }catch(err)
    {
        dispatch(deleteListFailure());
    }

}

// create 
export const createList = async (list,dispatch) =>{
    dispatch(createListStart())

    try{
        const res= await axios.post("/lists",list,{
        headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
       });
       dispatch(createListSuccess(res.data));
    }catch(err)
    {
        dispatch(createListFailure());
    }

}
