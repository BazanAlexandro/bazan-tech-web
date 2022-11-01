import { lighten } from '@mui/material'
import { animated } from 'react-spring'
import styled from 'styled-components'
import { mdViewport } from '../../../../constants/breakpoints'
import { COLORS } from '../../../../constants/colors'
import { GradientTextBase } from '../../../common'

export const Root = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(-45deg, ${COLORS.primary}, ${lighten(COLORS.primary, 0.2)});
	display: flex;
	align-items: center;
	padding: 1em 3em;
	gap: 2em;
	position: relative;
	justify-content: center;

	${mdViewport} {
		flex-direction: column;
		justify-content: center;
		padding: 2em;
	}
`


export const Bullet = styled(animated.div)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: center;
	text-align: left;
	
	${mdViewport} {
		text-align: center;
	}
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