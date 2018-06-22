import React from 'react';
import styled from 'styled-components';
import Linkify from 'react-linkify';
import classnames from 'classnames';
import ReactEmoji from 'react-emoji';
import ReactPlayer from 'react-player';
import Typography from '@material-ui/core/Typography';

export class Message extends React.PureComponent {
  renderVideo = links =>
    links.map((link, idx) =>
      <div className="player-wrapper">
        <ReactPlayer
          key={idx}
          url={link}
          width="100%"
          height="100%"
          className="player"
        />
      </div>);

  renderImages = links =>
    links.map((link, idx) =>
      <a key={idx} href={link} target="_blank">
        <img src={link} className="image"/>
      </a>);

  render() {
    const { videoLinks, imageLinks, message, user } = this.props;
    const className = classnames(this.props.className, { me: !user });

    return (
      <div className={className}>
        <div className="message-body">
          <Typography variant="caption" className="meta">
            <span>{this.props.user}</span>
            <span>{this.props.timestamp.format(this.props.timeFormat)}</span>
          </Typography>
          <Typography variant="body2" color="inherit">
            {imageLinks && this.renderImages(imageLinks)}
            {videoLinks && this.renderVideo(videoLinks)}
            {message && <Linkify>{ReactEmoji.emojify(message)}</Linkify>}
          </Typography>
        </div>
      </div>
    );
  }
}

export default styled(Message)`
  display: flex;
  position: relative;
  margin: 8px 0;
  padding: 16px 0;

  .message-body {
    padding: 8px;
    width: 40%;
    margin: 0 10px;
    box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
    border-radius: 2px;
    position: relative;
    background-color: #009688;
    color: #ffffff;
    
    &::before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: -9px;
      border-style: solid;
      border-width: 0 10px 10px 0;
      border-color: transparent #009688 transparent transparent;
    }
  }
    
  .meta {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    top: -20px;
    font-size: 14px;
    justify-content: space-between;
  }
  
  &.me {
     justify-content: flex-end;
  
    .meta {
      justify-content: flex-end;
    }
  
    .message-body {
      background: #607D8B;
      color: #ffffff;
      
      &::before {
        top: 0;
        left: inherit;
        right: -9px;
        border-width: 10px 10px 0 0;
        border-color: #607D8B transparent transparent transparent;
      }
    }
  }
  
  .image {
    display: block;
    max-width: 100%;
    
    &:not(:last-child) {
      padding-bottom: 8px;
    }
  }
  
  .player-wrapper {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
  }
  
  .player {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  @media (max-width: 700px) {
    .message-body {
      width: 50%;
    }
  }
  
   @media (max-width: 480px) {
    .message-body {
      width: 100%;
    }
  }
`;