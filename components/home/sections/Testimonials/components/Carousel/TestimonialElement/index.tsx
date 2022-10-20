import { TestimonialType } from '../../../../../../../types/Testimonial'
import * as Styles from './styles'

type Props = {
	item: TestimonialType
}

const TestimonialElement = ({
	item
}: Props) => {
	return (
		<Styles.Root>
			<Styles.HeroTitle>
				<Styles.Img />
				<Styles.CompanyImg />

				<Styles.Author>
					{item.author}
				</Styles.Author>

				<Styles.AuthorPosition>
					{item.authorPosition} at {item.company}
				</Styles.AuthorPosition>
			</Styles.HeroTitle>

			<Styles.Text>
				{item.text}
			</Styles.Text>
		</Styles.Root>
	)
}

export default TestimonialElement
