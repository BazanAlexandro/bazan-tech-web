import { COLORS } from '../../../../constants/colors'
import { TestimonialType } from '../../../../types/Testimonial'
import { Title } from '../../../common'
import TestimonialCarousel from './components/Carousel'
import * as Styles from './styles'

const items: TestimonialType[] = [{
	author: 'Casey Benko',
	authorImage: '/authors/casey-benko.jpg',
	authorPosition: 'President',
	company: 'BLT Global Ventures LLC',
	companyImage: '/companies/blt.png',
	text: `Alex is a pleasure to work with. Not only does he have the technical skills to get the job done, he communicates very well. He can work off of high-level objectives or understand, and provide feedback for, complex logic.`
}, {
	author: 'Aleksey Tarapygin',
	authorImage: '/authors/aleksey-tarapygin.jpeg',
	authorPosition: 'Senior Frontend Developer',
	company: 'Luxoft',
	companyImage: '/companies/luxoft.png',
	text: `I was lucky to work with Alexander for a year and a half together on the same project. During this time he showed himself as a professional and as a reliable colleague, to whom one could always turn for advice and, if necessary, for help. Working with him was comfortable and cool. I hope he learned as much from me as I did from him.`
}]

const TestimonialsSection = () => {
	return (
		<Styles.Root
			id="testimonials"
			data-section
			data-bg={COLORS.lighter}
			data-color={COLORS.primary}
		>
			<Title $colorFrom={COLORS.secondary}>
				Testimonials
			</Title>

			<TestimonialCarousel items={items} />
		</Styles.Root>
	)
}

export default TestimonialsSection
