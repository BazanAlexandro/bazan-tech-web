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

function getElementDistances() {
	const elements = [...document.getElementsByClassName('testimonial-el')]as HTMLDivElement[]

	let result: { index: number, distance: number, el: HTMLDivElement }[] = []

	elements.forEach((el, index) => {
		const { x: elemX, width: elemWidth } = el.getBoundingClientRect()

		const oldTransform = el.style.transform
		el.style.transform = `translateZ(0px)`

		const distance = -(document.body.clientWidth / 2 - elemX - elemWidth / 2)
		el.style.transform = oldTransform

		result.push({
			index,
			distance,
			el
		})
	})

	return result
}

const DISTANCE_THRESHOLD = 50

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

	const handleClickLeft = useCallback(() => {
		if (!scrollableRef.current) return

		const distances = getElementDistances()
		.filter(d => d.distance < 0 && Math.abs(d.distance) > DISTANCE_THRESHOLD)

		if (!distances.length) return

		const nearest = distances[distances.length - 1]

		scrollableRef.current.scroll({
			top: 0,
			left: scrollableRef.current.scrollLeft + nearest.distance,
			behavior: 'smooth'
		})
	}, [])

	const handleClickRight = useCallback(() => {
		if (!scrollableRef.current) return

		const distances = getElementDistances()
		.filter(d => d.distance > 0 && Math.abs(d.distance) > DISTANCE_THRESHOLD)

		if (!distances.length) return

		const nearest = distances[0]

		console.log('nearest', nearest)

		scrollableRef.current.scroll({
			top: 0,
			left: scrollableRef.current.scrollLeft + nearest.distance,
			behavior: 'smooth'
		})
	}, [])

	return (
		<Styles.Root>
			<Styles.ScrollableWrapper
				ref={scrollableRef}
				onScroll={scrollHandler}>
				{components}
			</Styles.ScrollableWrapper>
			<LeftArrow onClick={handleClickLeft} visible={leftVisible} />
			<RightArrow onClick={handleClickRight} visible={rightVisible} />
		</Styles.Root>
	)
}

export default TestimonialCarousel
