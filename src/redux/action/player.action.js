import axios from "axios"

export const addPlayer=(data)=>{
    
 return async (dispatch)=>{
    dispatch({type:"ADD_PLAYER",payload:data})
 }
}

export const addScore=(data)=>{
    
    return async (dispatch)=>{
       dispatch({type:"ADD_SCORE",payload:data})
    }
   }