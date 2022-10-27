import { useEffect, useMemo, useRef, useState } from "react"
import { TestimonialType } from "../../../../../../types/Testimonial"
import TestimonialElement from "./TestimonialElement"
import * as Styles from './styles'
import { LeftArrow, RightArrow } from "./Arrows"
import { useCallback } from "react"
import { getStyleValue } from "../../../../../../utils/getStyleValue"

type Props = {
	items: TestimonialType[]
}

const Z_INDEX_OFFSET = 150

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

		const distance = -(document.body.clientWidth / 2 - elemX - elemWidth / 2)

		result.push({
			index,
			distance,
			el
		})
	})

	return result
}

function calculateLeftOffset(container: HTMLDivElement, el?: HTMLDivElement): number {
	const paddingLeft = getStyleValue(container, 'padding-left')

	const elem = el ?? document.getElementsByClassName('testimonial-el').item(0) as HTMLDivElement

	return (elem.offsetWidth / 2 -  (container.clientWidth / 2 - paddingLeft))
}

function calculateScrollOffset(container: HTMLDivElement, el: HTMLDivElement, index: number): number {
	const gap = getStyleValue(container, 'gap')
	const elementWidth = el.offsetWidth
	const leftOffset = calculateLeftOffset(container, el)

	return index * (elementWidth + gap) + leftOffset
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
		const minOffset = scrollableRef.current ? calculateLeftOffset(scrollableRef.current) + DISTANCE_THRESHOLD : 0

		setLeftVisible(e.target.scrollLeft > minOffset)
		setRightVisible(e.target.scrollLeft < e.target.scrollWidth - e.target.clientWidth - minOffset)

		updateCarousel()
	}, [])

	const handleClickLeft = useCallback(() => {
		if (!scrollableRef.current) return

		const distances = getElementDistances()
		.filter(d => d.distance < 0 && Math.abs(d.distance) > DISTANCE_THRESHOLD)

		if (!distances.length) return

		const { el, index } = distances[distances.length - 1]

		scrollableRef.current.scroll({
			top: 0,
			left: calculateScrollOffset(scrollableRef.current, el, index),
			behavior: 'smooth'
		})
	}, [])

	const handleClickRight = useCallback(() => {
		if (!scrollableRef.current) return

		const distances = getElementDistances()
		.filter(d => d.distance > 0 && Math.abs(d.distance) > DISTANCE_THRESHOLD)

		if (!distances.length) return

		const { index, el } = distances[0]

		scrollableRef.current.scroll({
			top: 0,
			left: calculateScrollOffset(scrollableRef.current, el, index),
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
