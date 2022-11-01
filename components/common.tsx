import React, { useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animated, config, useSpring } from 'react-spring'
import styled from 'styled-components'
import { easeOutQuart } from '../constants/easings'

export const TitleStyled = styled(animated.h2)`
	text-align: center;
	margin: 0em;
	font-size: 2rem;
`

export const Title = (props: any) => {
	const { ref, inView } = useInView({
		threshold: 0.2
	})

	const [style, api] = useSpring({
		from: {
			opacity: 0,
			y: -50
		},
		config: config.molasses
	}, [])

	useEffect(() => {
		if (inView) {
			api.start({
				opacity: 1,
				y: 0
			})
		}
	}, [inView, api])

	return <TitleStyled ref={ref} {...props} style={style} />
}

const Link = styled(animated.a)<{ withHoverEffect?: boolean }>`
	position: relative;

	::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 0;
		border-bottom: thin solid currentColor;
		bottom: -3px;
		display: none;
		left: 0;
		transform: translateY(0px);
		animation: 300ms fadeIn ${easeOutQuart};
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(5px);
		}
		to {
			opacity: 1;
			transform: translateY(0px);
		}
	}

	${props => props.withHoverEffect && `
		&:hover::after {
			display: block;
		}
	`}
`

export const ExternalLink = styled(Link).attrs({
	target: '_blank',
	rel: 'noreferrer"'
})``

export const InternalLink = (props: any) => {
	const handleClick = useCallback((e: any) => {
		e.preventDefault()

		const target = document.querySelector(props.href)

		window.scroll({
			top: target.offsetTop,
			left: 0,
			behavior: 'smooth'
		})
	}, [props.href])

	return <Link {...props} onClick={handleClick} />
}