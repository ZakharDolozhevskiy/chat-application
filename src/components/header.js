import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import TranslatorContext from '../translator/translator-context';

export class Header extends React.PureComponent {
	render() {
		return (
			<TranslatorContext.Consumer>
				{translator => (
					<div className={this.props.className}>
						<NavLink exact to="/">
							{translator.translate('Chat')}
						</NavLink>
						<NavLink to="/settings">
							{translator.translate('Settings')}
						</NavLink>
					</div>)}
			</TranslatorContext.Consumer>
		)
	}
}

export default styled(Header)`
	display: flex;
	padding: 16px 24px;
	border-radius: 2px;
	background-color: ${props => props.theme.main};
  
  .active {
  	color: red;
  }
`;