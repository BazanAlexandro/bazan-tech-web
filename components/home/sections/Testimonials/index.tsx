import { TestimonialType } from '../../../../types/Testimonial'
import TestimonialCarousel from './components/Carousel'
import * as Styles from './styles'

const items: TestimonialType[] = Array(4).fill({
	author: 'Kianu Reeves',
	authorImage: '/reviewer.jpeg',
	authorPosition: 'CEO',
	company: 'Microsoft',
	companyLink: 'https://www.microsoft.com',
	companyImage: '/company-icon.png',
	text: `Excellent work. Really nice to work with, easy to get along, nice work ethic. Will definitely recomment!
	Excellent work. Really nice to work with, easy to get along, nice work ethic. Will definitely recomment!
	Excellent work. Really nice to work with, easy to get along, nice work ethic. Will definitely recomment!`
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
