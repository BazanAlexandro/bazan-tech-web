import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const Root = styled.div`
	background: ${COLORS.primary};
	box-shadow: 0 0 10px rgb(0 0 0 / 65%);
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 4rem;
	display: flex;
	justify-content: space-between;
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