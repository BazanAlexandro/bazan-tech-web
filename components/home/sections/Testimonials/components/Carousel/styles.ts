import styled from 'styled-components'

export const Root = styled.div`
	position: relative;
	width: 100%;
`

export const ScrollableWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow: auto;
	gap: 3em;
	perspective: 1000px;
	padding: 0 calc(100vw / 3);
	padding-top: 1em;

	overflow-x: auto;
    scrollbar-width: none;
    scrollbar-height: none;
    -ms-overflow-style: none;

	&::webkit-scrollbar {
		width: 0 !mportant;
		height: 0 !important;
	}
`
