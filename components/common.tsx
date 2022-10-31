import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { animated, config, useSpring } from 'react-spring'
import styled from 'styled-components'

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

export const ExternalLink = styled.a.attrs({
	target: '_blank',
	rel: 'noreferrer"'
})``