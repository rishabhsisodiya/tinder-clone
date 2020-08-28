import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import './ChatScreen.css';
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:'Kiara',
            image:'https://pbs.twimg.com/profile_images/1224293961470070784/XYD_CGEV_400x400.jpg',
            message:'Whats up'
        },
        {
            name:'Kiara',
            image:'https://pbs.twimg.com/profile_images/1224293961470070784/XYD_CGEV_400x400.jpg',
            message:'Hows it going'
        },
        {
            message:'Hello'
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH KIARA ON 20/08/2020</p>
            {messages.map(message => (
                message.name? (
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__image"
                     alt={message.name}
                     src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>):(
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )

            ))}
            <div>
                <form className="chatScreen__input">
                    <input
                    value={input} 
                    onChange={ (e)=> setInput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text" 
                    placeholder="Type a message..."
                    />
                    <button 
                    type="submit" 
                    className="chatScreen__inputButton"
                    onClick={handleSend}
                    >SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen
