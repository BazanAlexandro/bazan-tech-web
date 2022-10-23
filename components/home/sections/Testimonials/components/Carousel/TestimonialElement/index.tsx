import { TestimonialType } from '../../../../../../../types/Testimonial'
import getImg from '../../../../../../../utils/getImg'
import * as Styles from './styles'

type Props = {
	item: TestimonialType
}

const TestimonialElement = ({
	item
}: Props) => {
	return (
		<Styles.Root className="testimonial-el">
			<Styles.HeroTitle>
				<Styles.AuthorImgContainer>
					<Styles.AuthorImg src={getImg(item.authorImage)} />
					<Styles.CompanyImg src={getImg(item.companyImage)} />
				</Styles.AuthorImgContainer>

				<Styles.Author>
					{item.author}
				</Styles.Author>

				<Styles.AuthorPosition>
					{item.authorPosition} at {item.company}
				</Styles.AuthorPosition>
			</Styles.HeroTitle>

			<Styles.Hr />
			<Styles.Text>
				&quot;{item.text}&quot;
			</Styles.Text>
		</Styles.Root>
	)
}

export default TestimonialElement
