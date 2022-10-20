import { useLayoutEffect, useMemo, useRef } from "react"
import { TestimonialType } from "../../../../../../types/Testimonial"
import TestimonialElement from "./TestimonialElement"
import * as Styles from './styles'
import { LeftArrow, RightArrow } from "./Arrows"

type Props = {
	items: TestimonialType[]
}

const TestimonialCarousel = ({
	items
}: Props) => {
	const scrollableRef = useRef<HTMLDivElement>(null)

	const components = useMemo(() => {
		return items.map((item, i) => (
			<TestimonialElement
				key={i}
				item={item}
			/>
		))
	}, [items])

	return (
		<Styles.Root>
			<Styles.ScrollableWrapper>
				{components}
			</Styles.ScrollableWrapper>
			<LeftArrow />
			<RightArrow />
		</Styles.Root>
	)
}

export default TestimonialCarousel
