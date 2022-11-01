import styled from 'styled-components'
import { mdViewport } from '../../../../constants/breakpoints'
import { COLORS } from '../../../../constants/colors'

export const Root = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${COLORS.secondary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em 3em;
	gap: 2em;
	position: relative;

	${mdViewport} {
		padding-left: 0;
		padding-right: 0;
	}
`
