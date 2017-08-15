import React from 'react';


class ChatInput extends React.Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>

      </div>

    );
  }
}


export default ChatInput;
