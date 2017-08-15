import React from 'react';
import './HomePage.scss';
import ChatInput from '../ChatInput'
const HomePage = () => {
  return (
    <div>
      <div className="container">
      <h1>Billingham Example App</h1>
      <ChatInput/>
        <div className="bhm-footer">
          <button className="is-primary">footer button</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
