import styled from 'styled-components'
import { COLORS } from '../../../../../../../constants/colors'

export const Root = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	background: ${COLORS.lighter};
	color: ${COLORS.secondary};
	padding: 1em;
	min-width: 30em;
	height: 20em;
	gap: 0.5em;
	box-shadow: 0 0 10px rgb(0 0 0 / 30%);
`

export const HeroTitle = styled.div`
	margin: 0;
`

export const Img = styled.img``

export const CompanyImg = styled.img``

export const Author = styled.h3`
	margin: 0;
`

export const AuthorPosition = styled.h4`
	margin: 0;
`

export const Text = styled.div``