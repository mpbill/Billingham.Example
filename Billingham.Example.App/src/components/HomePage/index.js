import React from 'react';
import './HomePage.scss';
import ChatInput from '../ChatInput';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {ToggleFlyUp,UserInputMessage,UserInputName,SubmitMessage} from '../../actions';

class HomePageComponent extends React.Component {
  render() {
    let chevronClassNames = classNames('fa',{'fa fa-chevron-up':!this.props.isFlyUpExpanded,'fa fa-chevron-down':this.props.isFlyUpExpanded});
    let footerClassNames =classNames('bhm-footer',{'bhm-footer-hidden':!this.props.isFlyUpExpanded});
    return (
      <div>
      <div>
      <h1>Billingham Example App</h1>

      <div className={footerClassNames}>
        <div className="bhm-footer-chevron-wrapper"><i className={chevronClassNames} onClick={this.props.onFlyUpChevronClick} /></div>


        <ChatInput
          isHidden={!this.props.isFlyUpExpanded}
          name={this.props.name}
          message={this.props.message}
          submitMessage={this.props.submitMessage}
          nameChange={this.props.nameChange}
          messageChange={this.props.messageChange}/>
      </div>
      </div>
      </div>
    );
  }
};

let mapDispatchToProps = dispatch=>{
  return{
    onFlyUpChevronClick:()=>dispatch(ToggleFlyUp()),
    nameChange:(text)=>dispatch(UserInputName(text)),
    messageChange:(text)=>dispatch(UserInputMessage(text)),
    submitMessage:(name,message)=>dispatch(SubmitMessage(name,message))
  }
};

let mapStateToProps=state=>{
  return{
    isFlyUpExpanded:state.chatReducer.isFlyUpExpanded,
    name:state.chatReducer.name,
    message:state.chatReducer.message,
    allMessages:state.messages.
  }
};

let HomePage = connect(mapStateToProps,mapDispatchToProps)(HomePageComponent);

export {HomePage,HomePageComponent};
