import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { SET_USERNAME } from "../Store/reducer"


export const Login = () => {
    const username = useSelector(state => state.username)
    const dispatch = useDispatch()
    const [name, setName] = React.useState(username)
    return(
    <>
        <h2>Podaj nazwę, aby móc rozmawiać</h2><br/>
        <label>Podaj nazwę:</label><br/>
            <input type="text" id="username" value={name} onChange={event => {setName(event.target.value)}}></input><br/>
            <button className="btn btn-info" onClick={event => {
            dispatch({
                type: SET_USERNAME,
                payload: name
            })
        }} >Rozmawiaj</button>
    </>)
}