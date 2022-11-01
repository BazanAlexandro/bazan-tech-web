import React, { useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animated, config, useSpring } from 'react-spring'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { easeOutQuart } from '../constants/easings'

const Link = styled(animated.a)<{ $withHoverEffect?: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.5em;

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

	${props => props.$withHoverEffect && `
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

export const GradientTextBase = styled(animated.div)<{ $colorFrom?: string, colorTo?: string }>`
	font-size: 2rem;
	background: linear-gradient(0deg, ${props => props.$colorFrom ?? COLORS.light}, ${props => props.colorTo ?? COLORS.lighter});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0.1em;
`

export const GradientText = ({
	withAnimation,
	$colorFrom,
	colorTo,
	...props
}: any) => {
	const colorStart = $colorFrom ?? COLORS.light
	const colorEnd = colorTo ?? COLORS.lighter

	const durationSpring = useSpring({
		from: {
			WebkitBackgroundClip: 'text',
			background: `linear-gradient(0deg, ${colorStart}, ${colorEnd})`,
		},
		background: `linear-gradient(360deg, ${colorStart}, ${colorEnd})`,
		WebkitBackgroundClip: 'text',
		loop: true,
		immediate: !withAnimation,
		config: config.molasses
	})

	return (
		<GradientTextBase {...props} style={withAnimation ? durationSpring : {}} />
	)
}

export const TitleStyled = styled(GradientTextBase)`
	text-align: center;
	margin: 0em;
	font-size: 3rem;
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