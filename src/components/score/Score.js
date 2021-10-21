import React from 'react'
import {useSelector} from 'react-redux'


export default function Score (){
const player = useSelector(state=>state.playerPoints)
const comp = useSelector(state=>state.computerPoints)
        return(
        <div>
            <div>Player: {player}</div>
            <div>Computer: {comp}</div>
        </div>
        )
}

