import React from 'react'
import { Avatar } from '@material-ui/core'
import './Chat.css';
import { Link } from 'react-router-dom';
function Chat(props) {
    return (
        <Link to={`/chat/${props.name}`}>
             <div className="chat">
            <Avatar className="chat__image" alt={props.name} src={props.profilePic}/>
            <div className="chat__details">
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
            <p className="chat__timestamp">{props.timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
