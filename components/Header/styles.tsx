import { animated } from 'react-spring'
import styled from 'styled-components'
import { lighten } from '@mui/material'
import { easeOutQuart } from '../../constants/easings';
import { mdViewport } from '../../constants/breakpoints';

export const getBg = (bg: string) => {
	return `linear-gradient(45deg, ${bg} 50%, ${lighten(bg, 0.3)} 100%)`;
}

export const Root = styled(animated.div)<{ bg: string, color: string }>`
	position: relative;
	z-index: 10;
	background: ${props => getBg(props.bg)};
	color: ${props => props.color};
	box-shadow: 0 0 10px rgb(0 0 0 / 65%);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	transition: background 300ms ${easeOutQuart};
	gap: 2em;

	${mdViewport} {
		padding: none;
		justify-content: center;
	}
`

export const ContactsPanel = styled.div`
	display: flex;
	gap: 1em;
	height: 100%;
	padding-left: 3em;
	align-items: center;

	${mdViewport} {
		padding: 0;
	}
`

export const NavigationPanel = styled.div`
	display: flex;
	gap: 1em;
	height: 100%;
	padding-right: 3em;
	align-items: center;

	${mdViewport} {
		display: none;
	}
`

export const HeaderItem = styled(animated.div)`
	display: flex;
	gap: 1em;
	align-items: center;
`