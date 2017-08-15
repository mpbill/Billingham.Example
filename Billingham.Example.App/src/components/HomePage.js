import React from 'react';
import {Link} from 'react-router';
import ChatInput from './ChatInput'
const HomePage = () => {
  return (
    <div>
      <div className="container">
      <h1>Billingham Example App</h1>
      <ChatInput/>
      </div>
    </div>
  );
};

export default HomePage;
