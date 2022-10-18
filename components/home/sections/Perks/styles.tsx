import { animated } from 'react-spring'
import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'

export const Root = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${COLORS.primary};
	display: flex;
	align-items: center;
	padding: 1em 3em;
	gap: 2em;
	position: relative;
`

export const Bullet = styled(animated.div)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: center;
	text-align: center;
`

export const BulletHeader = styled.h2`
	margin: 0;
`

export const HeaderCoutner = styled(animated.h2)`
	width: 200px;
	margin: 0;
	font-size: 11rem;
`