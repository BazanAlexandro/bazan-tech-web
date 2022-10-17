import styled from 'styled-components'
import { TestimonialType } from '../../../../../types/Testimonial'

type Props = {
	item: TestimonialType
}

const Root = styled.div`
	display: flex;
	flex-direction: column;
`

const HeroTitle = styled.div``

const Img = styled.img``

const CompanyImg = styled.img``

const Author = styled.h3``

const AuthorPosition = styled.h4``

const Text = styled.div``

const Testimonial = ({
	item
}: Props) => {
	return (
		<Root>
			<HeroTitle>
				<Img />
				<CompanyImg />

				<Author>
					{item.author}
				</Author>

				<AuthorPosition>
					{item.authorPosition} at {item.company}
				</AuthorPosition>
			</HeroTitle>

			<Text>
				{item.text}
			</Text>
		</Root>
	)
}

export default Testimonial
