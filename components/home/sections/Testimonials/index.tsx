import { TestimonialType } from '../../../../types/Testimonial'
import TestimonialCarousel from './components/Carousel'
import * as Styles from './styles'

const items: TestimonialType[] = Array(10).fill({
	author: 'Test',
	authorImage: '/img.jpg',
	authorPosition: 'CEO',
	company: 'Microsoft',
	companyLink: 'https://www.microsoft.com',
	companyImage: '/company-img.jpg',
	text: 'Excellent work. Really nice to work with, easy to get along, nice work ethic. Will definitely recomment!'
})

const TestimonialsSection = () => {
	return (
		<Styles.Root>
			<Styles.Title>
				Testimonials
			</Styles.Title>

			<TestimonialCarousel items={items} />
		</Styles.Root>
	)
}

export default TestimonialsSection
