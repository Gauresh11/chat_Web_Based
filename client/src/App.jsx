import React from 'react'
import {StreamChat} from 'stream-chat';
import{ChannelListMessenger, Chat}from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelContainer, ChannelListContainer} from './components';
const apikey = '7c5ccd9kgwnb';
const client = StreamChat.getInstance(apikey);

const App = () => {
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

export default App