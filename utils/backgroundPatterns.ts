import styled from 'styled-components'

export const BgPattern = styled.div`
	position: absolute;
	left: 0%;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	color: white;
`

export const Dots = styled(BgPattern)`
	background-image: radial-gradient(currentColor .5px, transparent .5px);
	background-size: calc(10 * 2.5px) calc(10 * 2.5px);
`
