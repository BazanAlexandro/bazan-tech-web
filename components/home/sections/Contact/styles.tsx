import { darken } from '@mui/material'
import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { easeOutQuart } from '../../../../constants/easings'
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

export const UpworkIcon = () => (
	<svg width="1024px" height="1024px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
		<circle cx="512" cy="512" r="512" />
		<path style={{ fill: '#fff', transform: 'translate(74%) scale(3.5)', transformOrigin: 'center'}} d="M362.26 544.5c-18.49 0-30.73-14-34.15-19.43 4.38-34.33 17.2-45.18 34.15-45.18C379 479.88 392 493 392 512.19s-13 32.31-29.74 32.31zm0-85.69c-30.15 0-47 19.25-51.87 39.06-5.48-10.1-9.54-23.6-12.69-36.16H256v50.79c0 18.42-8.57 32.05-25.32 32.05s-26.35-13.63-26.35-32.05l.19-50.79h-24v50.79c0 14.83 4.9 28.27 13.85 37.86 9.21 9.91 21.78 15.08 36.34 15.08 29 0 49.23-21.77 49.23-52.94v-34.13c3 11.23 10.24 32.81 24 51.74L291.06 602h24.42l8.5-50.92a66.79 66.79 0 0 0 8.89 6.12 55.15 55.15 0 0 0 27.19 8.2s1.48.06 2.26.06c29.9 0 53.67-22.65 53.67-53.26s-23.83-53.39-53.73-53.39zm345.29 0" />
	</svg>
)

export const CallLink = styled(ExternalLink)`
	display: flex;
	align-items: center;
	gap: 0.5em;
	font-size: 1.2rem;
`

export const InteractiveIconContainer = styled.div<{ accentColor: string }>`
	svg {
		transition: all 300ms ${easeOutQuart};
		transform-origin: center;
	}

	&:hover {
		svg {
			transform: scale(1.5);
			fill: ${props => props.accentColor};
		}
	}
`