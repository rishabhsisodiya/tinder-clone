import React from 'react';
import './Chats.css'
import Chat from './Chat';


function Chats() {
    return (
        <div>
            <Chat
                name="Kiara Advani"
                message="Hey! How are you"
                timestamp="40 seconds ago"
                profilePic="https://timesofindia.indiatimes.com/thumb/msid-75034573,width-1200,height-900,resizemode-4/.jpg"
            />
            <Chat
                name="Shurti Hasan"
                message="Hey!!"
                timestamp="50 seconds ago"
                profilePic="https://pbs.twimg.com/profile_images/1224293961470070784/XYD_CGEV_400x400.jpg"
            />
            <Chat
                name="Jennifer Winget"
                message="Hii.."
                timestamp="1 minute ago"
                profilePic="https://www.businessupturn.com/wp-content/uploads/2020/05/beyhadh2002.jpg"
            />
            <Chat
                name="Hina Khan"
                message="How you doing.."
                timestamp="20 seconds ago"
                profilePic="https://wikibio.in/wp-content/uploads/2017/10/Hina-Khan.jpg"
            />
        </div>
    )
}

export default Chats
