import { useEffect, useMemo, useRef, useState } from "react"
import { TestimonialType } from "../../../../../../types/Testimonial"
import TestimonialElement from "./TestimonialElement"
import * as Styles from './styles'
import { LeftArrow, RightArrow } from "./Arrows"
import { useCallback } from "react"

type Props = {
	items: TestimonialType[]
}

const Z_INDEX_OFFSET = 150
const ARROW_MIN_OFFSET = 30

function updateCarousel() {
	const elements = [...document.getElementsByClassName('testimonial-el')]as HTMLDivElement[]

	elements.forEach(e => {
		const { x: elemX, width: elemWidth } = e.getBoundingClientRect()

		if (elemX < 0) return
		const elemCenter = Math.abs(document.body.clientWidth / 2 - elemX - elemWidth / 2)

		e.style.transform = `translateZ(${-elemCenter}px)`

		const zIndex = Math.min(Z_INDEX_OFFSET / elemCenter, 1) * 10
		e.style.zIndex = Math.floor(zIndex * 10).toString()
	})
}

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

	useEffect(() => {
		updateCarousel()
	}, [])

	// remake to intersection observer
	const scrollHandler = useCallback((e: any) => {
		setLeftVisible(e.target.scrollLeft > ARROW_MIN_OFFSET)
		setRightVisible(e.target.scrollLeft < e.target.scrollWidth - e.target.clientWidth - ARROW_MIN_OFFSET)

		updateCarousel()
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
