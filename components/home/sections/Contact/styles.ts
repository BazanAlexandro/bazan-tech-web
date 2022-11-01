import { darken } from '@mui/material'
import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { ExternalLink } from '../../../common'

export const Root = styled.div`
	width: 100%;
	min-height: 100vh;
	background: linear-gradient(-45deg, ${COLORS.lighter}, ${darken(COLORS.lighter, 0.05)});
	color: ${COLORS.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em 3em;
	gap: 2em;
	position: relative;
`

export const ContactsRow = styled.div`
	display: flex;
	gap: 2em;
	align-items: center;

	svg, img {
		width: 1.5em;
		height: 1.5em;
	}
`

export const UpworkIcon = styled.img``

export const CallLink = styled(ExternalLink)`
	display: flex;
	align-items: center;
	gap: 0.5em;
	font-size: 1.2rem;
`