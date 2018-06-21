import React from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player'

export class Message extends React.PureComponent {
	renderImages = links =>
		links.map((link, idx) => <img src={link} key={idx}/>);

	renderVideo = links =>
		links.map((link, idx) => <ReactPlayer url={link} key={idx}/>);

	render() {
		const { message, videoLinks, imageLinks, className } = this.props;

		return (
			<div className={className}>
				{imageLinks && this.renderImages(imageLinks)}
				{videoLinks && this.renderVideo(videoLinks)}
				<em>{message}</em>
			</div>
		);
	}
}

export default styled(Message)`
	display: flex;
`;