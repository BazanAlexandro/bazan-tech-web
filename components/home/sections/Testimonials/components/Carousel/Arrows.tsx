import styled from 'styled-components'
import LeftIcon from '@mui/icons-material/ArrowCircleLeft'
import RightIcon from '@mui/icons-material/ArrowCircleRight'
import { COLORS } from '../../../../../../constants/colors'

type Direciton = 'left' | 'right'

const ArrowBase = styled.button<{ visible?: boolean, direction: Direciton }>`
	border: none;
	cursor: pointer;
	color: white;
	position: absolute;
	display: flex;
	height: 100%;
	top: 0;
	align-items: center;
	justify-content: center;
	width: 8em;
	background:
		linear-gradient(${props => props.direction === 'left' ? 'to right' : 'to left'},
		${COLORS.secondary} 20%, rgba(0, 0, 0, 0));
	${props => !props.visible && `display: none;`}

	svg {
		fill: ${COLORS.lighter};
		width: 3rem;
	}

	animation: appear 100ms ease-out;

	@keyframes appear {
		from {
			opacity: 0;
			transform: translateX(${props => props.direction === 'left' ? '-' : ''}50px);
		}

		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}
`

type Props = {
	visible?: boolean
	onClick: () => void
}

export const LeftArrow = ({
	visible,
	onClick
}: Props) => {
	return (
		<ArrowBase
			// onClick={onClick}
			visible={visible}
			style={{ left: 0 }}
			direction="left"
		>
			{/* <LeftIcon sx={{ color: 'white' }} /> */}
		</ArrowBase>
	)
}

export const RightArrow = ({
	visible,
	onClick
}: Props) => {
	return (
		<ArrowBase
			// onClick={onClick}
			visible={visible}
			style={{ right: 0 }}
			direction="right"
		>
			{/* <RightIcon sx={{ color: 'white' }} /> */}
		</ArrowBase>
	)
}