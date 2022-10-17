import { TestimonialType } from '../../../../types/Testimonial'
import Testimonial from './components/Testimonial'
import * as Styles from './styles'

const items: TestimonialType[] = [{
	author: 'Test',
	authorImage: '/img.jpg',
	authorPosition: 'CEO',
	company: 'Microsoft',
	companyLink: 'https://www.microsoft.com',
	companyImage: '/company-img.jpg',
	text: 'Excellent work. Really nice to work with, easy to get along, nice work ethic. Will definitely recomment!'
}]

const TestimonialsSection = () => {
	const list = items.map((it, ind) => (
		<Testimonial item={it} key={ind} />
	))

	return (
		<Styles.Root>
			Testimonials

			<Styles.TestimonialListRoot>
				{list}
			</Styles.TestimonialListRoot>
		</Styles.Root>
	)
}

export default TestimonialsSection
