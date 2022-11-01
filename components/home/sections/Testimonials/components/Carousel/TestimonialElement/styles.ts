import styled from 'styled-components'
import { mdViewport } from '../../../../../../../constants/breakpoints'
import { COLORS } from '../../../../../../../constants/colors'

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	background: ${COLORS.lighter};
	color: ${COLORS.secondary};
	padding: 1em;
	padding-top: 5em;
	min-width: 30em;
	height: 20em;
	gap: 0.5em;
	box-shadow: 0 0 10px rgb(0 0 0 / 30%);
	position: relative;
	border: thin solid #ccc;
	border-radius: 1em;

	${mdViewport} {
		min-width: calc(100vw - 1em);
		transform: none !important;
	}
`

export const HeroTitle = styled.div`
	margin: 0;
`

export const AuthorContainer = styled.div`
`

export const AuthorImgContainer = styled.div`
	position: absolute;
	width: 5em;
	height: 5em;
	left: 50%;
	top: -14px;
`

export const AuthorImg = styled.img`
	width: 100%;
    height: 100%;
    border-radius: 1.2em;
    box-shadow: 0 0 25px rgb(0 0 0 / 30%);
    object-fit: cover;
    background: white;
    transform: translateX(-50%);
`

export const CompanyImg = styled.img`
	background: white;
    border: 3px solid white;
	border-radius: 0.5em;
	width: 2em;
	height: 2em;
	transform: translateY(-50%);
    box-shadow: 0 0 25px rgb(0 0 0 / 30%);
	object-fit: cover;
`

export const Author = styled.h3`
	margin: 0;
`

export const AuthorPosition = styled.h4`
	margin: 0;
`


export const Text = styled.div`
	font-style: italic;
`

export const Hr = styled.hr`
	width: 100%;
	border: none;
	border-bottom: 1px dashed #5c2e7e;
`