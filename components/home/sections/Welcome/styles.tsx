import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'

export const Root = styled.div`
	background: url(assets/IMG_3060.jpg);
	background-size: cover;
	background-attachment: fixed;
	width: 100%;
    height: 100vh;
	background-position-y: -35px;
	display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;
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