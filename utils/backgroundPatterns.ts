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

export const Squares = styled(BgPattern)`
	inset: 0;
	width: auto;
	height: auto;
	background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

export const Dots = styled(BgPattern)`
	background-image: radial-gradient(currentColor .5px, transparent .5px);
	background-size: calc(10 * 2.5px) calc(10 * 2.5px);
`
