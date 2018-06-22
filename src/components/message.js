import React from "react";
import styled from 'styled-components';
import Linkify from 'react-linkify';
import ReactEmoji from 'react-emoji';
import ReactPlayer from 'react-player';

export class Message extends React.PureComponent {
  renderImages = links =>
    links.map((link, idx) => <img src={link} key={idx}/>);

  renderVideo = links =>
    links.map((link, idx) => <ReactPlayer url={link} key={idx}/>);

  render() {
    const { message, videoLinks, imageLinks, className, timestamp, user, timeFormat } = this.props;

    return (
      <div className={className}>
        <div className="circle"/>
        <span>{user}</span>
        ---
        <span>{timestamp.format(timeFormat)}</span>
        <div className="text">
          {imageLinks && this.renderImages(imageLinks)}
          {videoLinks && this.renderVideo(videoLinks)}
          <Linkify>{ReactEmoji.emojify(message)}</Linkify>
        </div>
      </div>
    );
  }
}

export default styled(Message)`
  position: relative;
  overflow: hidden;
  
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  
  .circle {
    height: 42px;
    width: 42px;
    border-radius: 50%;
  }
  
  .text {
    padding: 10px;
    min-height: 42px;
    width: 60%;
    margin: 0 10px;
    box-shadow: 0px 1px 0px 0px rgba(50, 50, 50, 0.3);
    border-radius: 2px;
    font-weight: 300;
    position: relative;
    /* word-break: break-all; */
    
    &:before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 0;
        border-color: transparent #F44336 transparent transparent;
        position: absolute;
        top: 0;
        left: -9px;
    }
  }
  
  .circle, .text {
    background: #F44336;
    float: left;
    color: #ffffff;
  }
  
  //&.me {
  //  .circle, .text {
  //    background: #FF5722;
  //    float: right;
  //    color: #333333;
  //  }
  //  
  //  .text {
  //    background: #ffffff;
  //    
  //    &:before {
  //      border-width: 10px 10px 0 0;
  //      border-color: #ffffff; transparent transparent transparent;
  //      position: absolute;
  //      top: 0;
  //      right: -9px;
  //    }
  //  }
  //}
`;