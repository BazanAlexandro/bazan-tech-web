import { animated } from 'react-spring'
import styled from 'styled-components'

export const Root = styled.div<{ bg: string, color: string }>`
	position: relative;
	z-index: 10;
	background: ${props => props.bg};
	color: ${props => props.color};
	box-shadow: 0 0 10px rgb(0 0 0 / 65%);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	transition: background 300ms cubic-bezier(0.25, 1, 0.5, 1);
`

export const ContactsPanel = styled.div`
	display: flex;
	gap: 1em;
	height: 100%;
	padding-left: 3em;
	align-items: center;
`

export const NavigationPanel = styled.div`
	display: flex;
	gap: 1em;
	height: 100%;
	padding-right: 3em;
	align-items: center;
`

export const HeaderItem = styled(animated.div)`
	display: flex;
	gap: 1em;
	align-items: center;
`