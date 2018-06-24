import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Linkify from 'react-linkify';
import ReactEmoji from 'react-emoji';
import ReactPlayer from 'react-player';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

export class Message extends React.PureComponent {
  renderVideo = links =>
    links.map((link, idx) =>
      <div key={idx} className="player-wrapper">
        <ReactPlayer url={link} width="100%" height="100%" className="player"/>
      </div>);

  renderImages = links =>
    links.map((link, idx) =>
      <a key={idx} href={link} target="_blank" className="image-link">
        <img src={link} alt=""/>
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
          <Typography variant="body1" color="inherit" component="div">
            {imageLinks && this.renderImages(imageLinks)}
            {videoLinks && this.renderVideo(videoLinks)}
            {message
              ? (<Linkify properties={{target: '_blank'}}>
                  {ReactEmoji.emojify(message)}
                 </Linkify>)
              : null}
          </Typography>
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  user: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.instanceOf(moment),
  timeFormat: PropTypes.string.isRequired,
  imageLinks: PropTypes.array,
  videoLinks: PropTypes.array
};

export default styled(Message)`${styles}`;