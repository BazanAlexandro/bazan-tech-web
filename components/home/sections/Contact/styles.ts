import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'

export const Root = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${COLORS.lighter};
	color: ${COLORS.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em 3em;
	gap: 2em;
`

export const Title = styled.h2``

export const ContactsRow = styled.div`
	display: flex;
	gap: 1em;
	align-items: center;
`