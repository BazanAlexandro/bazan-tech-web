import { animated } from 'react-spring'
import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { GradientTextBase } from '../../../common'

export const Root = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: ${COLORS.primary};
	display: flex;
	align-items: center;
	padding: 1em 3em;
	gap: 2em;
	position: relative;
	justify-content: center;
`

export const DotBackground = styled.div`
	background-image: radial-gradient(currentColor .5px, transparent .5px);
	background-size: calc(10 * 2.5px) calc(10 * 2.5px);
	color: white;
	position: absolute;
	left: 0%;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
`

export const Bullet = styled(animated.div)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: center;
	text-align: left;
`

export const BulletHeader = styled.h2`
	margin: 0;
`

export const HeaderCoutner = styled(GradientTextBase)`
	width: 300px;
	margin: 0;
	font-size: 15rem;
	line-height: 1;
	padding: 0;
`

export const PerkList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	max-width: 30em;
`