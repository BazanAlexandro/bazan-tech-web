import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'

export const Root = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${COLORS.light};
	color: ${COLORS.primary};
	display: flex;
	flex-direction: column;
	padding: 1em 3em;
	gap: 2em;
`
