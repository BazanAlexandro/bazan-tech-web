import styled from 'styled-components'

const Root = styled.div`
	background-image: url('assets/IMG_3060.jpg');
`

const Welcome = () => {
	return (
		<Root>
			<h2>
				Alexander Bazan
			</h2>
			<h5>
				Skilled frontend developer with attention to customer needs
			</h5>
		</Root>
	)
}

export default Welcome