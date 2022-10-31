import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { ExternalLink } from '../../../common'

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

export const ContactsRow = styled.div`
	display: flex;
	gap: 1em;
	align-items: center;

	svg, img {
		width: 2em;
		height: 2em;
	}
`

export const UpworkIcon = styled.img``

export const CallLink = styled(ExternalLink)`
	display: flex;
	align-items: center;
	gap: 0.5em;

	span {
		border-bottom: thin dashed #333;
	}

	svg {
		width: 1.5em;
	}
`