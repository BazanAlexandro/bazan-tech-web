import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { TestimonialType } from "../../../../../../types/Testimonial"
import TestimonialElement from "./TestimonialElement"
import * as Styles from './styles'
import { LeftArrow, RightArrow } from "./Arrows"
import { useCallback } from "react"

type Props = {
	items: TestimonialType[]
}

const ARROW_MIN_OFFSET = 30

const TestimonialCarousel = ({
	items
}: Props) => {
	const scrollableRef = useRef<HTMLDivElement>(null)
	const [leftVisible, setLeftVisible] = useState(true)
	const [rightVisible, setRightVisible] = useState(true)

	const components = useMemo(() => {
		return items.map((item, i) => (
			<TestimonialElement
				key={i}
				item={item}
			/>
		))
	}, [items])

	// remake to intersection observer
	const scrollHandler = useCallback((e: any) => {
		setLeftVisible(e.target.scrollLeft > ARROW_MIN_OFFSET)
		setRightVisible(e.target.scrollLeft < e.target.scrollWidth - e.target.clientWidth - ARROW_MIN_OFFSET)
	}, [])

	return (
		<Styles.Root>
			<Styles.ScrollableWrapper
				ref={scrollableRef}
				onScroll={scrollHandler}>
				{components}
			</Styles.ScrollableWrapper>
			<LeftArrow visible={leftVisible} />
			<RightArrow visible={rightVisible} />
		</Styles.Root>
	)
}

export default TestimonialCarousel
