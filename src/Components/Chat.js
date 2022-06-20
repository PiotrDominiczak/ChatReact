import React, { useRef, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { SET_MESSAGE } from "../Store/reducer"
import * as io from "socket.io-client";

export const Chat = () => {
    const username = useSelector(state => state.username)
    const messages = useSelector(state => state.messages)
    const dispatch = useDispatch();
    const [yourMessage, setMessage] = React.useState('')
    const socketRef = useRef();
    // const showMessage = () => {
    //     document.createElement('p')
    //     document.querySelector('p').innerText = `${messages.authorId} : ${messages.text}`
    //     document.body.append(document.querySelector('p'))
    // }
    useEffect(() => {
        socketRef.current = io.connect("https://chat-server.fbg.pl");
        socketRef.current.on("chat message", (message) => {
            dispatch({
                type: SET_MESSAGE,
                payload: message
            })
        });
        return () => {
            socketRef.current.disconnect()
        }
    }, [])
    
    
    console.log(messages.text)
    // showMessage()
    return <>
        <h2>Chat</h2><br/>
        <p>Obecnie piszesz jako {username}</p>
        <h3>Chat Component</h3>
        <input type="text" id="message" value={yourMessage} onChange={event => {setMessage(event.target.value)}}/>
        <button onClick={event => {
            socketRef.current.emit("chat message", {
                text: yourMessage,
                authorId: username});
        }}>Wyślij</button>
        <p>{yourMessage}</p>{messages.map(message=><p key={message.id}><b>{message.authorId}</b>: {message.text}</p>)}
        
    </>

}