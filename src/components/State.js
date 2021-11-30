import React, { useContext } from 'react'
import { StateContext } from '../App'



export default function State() {
    
    const state = useContext(StateContext)
    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}
