import React from 'react';
import classNames from 'classNames';
import {uuidv4} from '../helpers/uuidv4';
class ChatInput extends React.Component {
  constructor(props){
    super(props);
    this.submitClicked = this.submitClicked.bind(this);
    this.onNameInput = this.onNameInput.bind(this);
    this.onMessageInput = this.onMessageInput.bind(this);
  }
  render() {
    let hiddenClassName = classNames('bhm-chat-input',{'bhm-hidden':this.props.isHidden});
    return (
      <div className={hiddenClassName}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input value={this.props.name} className="input" type="text" placeholder="Text input" onChange={this.onNameInput}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea value={this.props.message} className="textarea" placeholder="Textarea" onChange={this.onMessageInput} />
          </div>
        </div>
        <div>
        <div className="field">
          <div className="control">
            <button className="button is-primary" onClick={this.submitClicked}>Submit</button>
          </div>
        </div>
        </div>

      </div>

    );
  }
  onNameInput(e){
    this.props.nameChange(e.target.value);
  }
  onMessageInput(e){
    this.props.messageChange(e.target.value)
  }
  submitClicked(){
    this.props.submitMessage(this.props.name,this.props.message);
  }
}


export default ChatInput;
