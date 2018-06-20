import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export class Header extends React.Component {
	render() {
		console.log(this.props);
		return <ul className={this.props.className}>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/settings">Settings</Link>
			</li>
		</ul>
	}
}

export default styled(Header)`
	display: flex;
	background-color: ${props => props.theme.main};
`;