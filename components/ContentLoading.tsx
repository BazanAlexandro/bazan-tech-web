import { CircularProgress } from '@mui/material'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { getBg } from './Header/styles'

const Container = styled.div`
	position: fixed;
	inset: 0;
	background: ${getBg(COLORS.primary)};
	display: flex;
	align-items: center;
	justify-content: center;
`

const ContentLoading = () => {
	return (
		<Container>
			<CircularProgress />
		</Container>
	)
}

export default ContentLoading
