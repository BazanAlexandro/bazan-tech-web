import styled from 'styled-components'
import { mdViewport } from '../../../../constants/breakpoints'
import { COLORS } from '../../../../constants/colors'

export const Root = styled.div`
	width: 100%;
    height: 100vh;
	background-position-y: -35px;
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	position: relative;
	overflow: hidden;
`

export const Title = styled.h2`
	color: ${COLORS.lighter};
	margin: 0;
	font-size: 3em;
	text-shadow: 0 0 6px #00000087;
`

export const Subtitle = styled(Title)`
	font-size: 1em;
`

export const Bg = styled.img`
	background: url(assets/BG_2.jpg);
	background-size: cover;
	background-attachment: fixed;
	position: absolute;
	min-width: 100vw;
	min-height: 100vh;
	filter: brightness(0.85);

	${mdViewport} {
		transform: none !important;
		background-attachment: scroll;
	}
`

export const Fg = styled.img`
	position: absolute;
	left: 50%;
	width: 35vw;
	max-height: 100vh;
	min-width: 60vh;
	object-fit: contain;
	transform-origin: bottom;
	bottom: -5em;
	z-index: 0;
	filter: drop-shadow(2px 4px 6px black);

	${mdViewport} {
		transform: none !important;
		left: 0;
	}
`

export const TextContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	${mdViewport} {
		transform: none !important;
		text-align: center;
		padding: 0 1em;
	}
`