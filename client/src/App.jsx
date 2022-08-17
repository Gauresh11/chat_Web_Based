import React from 'react'
import {StreamChat} from 'stream-chat';
import{ChannelListMessenger, Chat}from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelContainer, ChannelListContainer,Auth} from './components';
import './App.css';
const apikey = '7c5ccd9kgwnb';
const client = StreamChat.getInstance(apikey);
const cookies = new Cookies();
if(authToken) {
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}
const authToken = false;
const App = () => {
  if (!authToken) {return <Auth />}
  return (
    

    <div className="app__wrapper">
          <Chat client={client} theme ="team light">
             
                  <ChannelListContainer
                  />
                  
                  <ChannelContainer
                  
                  />


          </Chat>
        
    </div>
  );
}

export default App;