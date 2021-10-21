import * as actions from './actionTypes'


let userPoints=0;
let AIPoints=0;


export default function reducer(state={playerPoints:0,computerPoints:0},action){
    switch(action.type){
        case(actions.ADD_TO_PLAYER):
        return {
            ...state,
            playerPoints:++userPoints    
        }
            
        case(actions.ADD_TO_COMP):
        return{
            ...state,
                computerPoints:++AIPoints
            }
        
        default:
            return state;
    }
    

}