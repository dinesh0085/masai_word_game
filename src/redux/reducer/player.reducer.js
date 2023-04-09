
const initial={
    id:"",
    name:"",
    difficulty:"",
    score:0
}
export const playerReducer=(state=initial,{type,payload})=>{
    switch(type){
        case "ADD_PLAYER":{
            return {...state,name:payload.name,difficulty:payload.difficulty,id:payload._id}
        }

        case "ADD_SCORE":{
            return {...state,score:state.score+Number(payload)}
        }

        default:{
            return state
        }
    }
}