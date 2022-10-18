import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, config, useTrail } from 'react-spring'
import * as Styles from './styles'

/**
 * 7 years of experience in the middle
 * 1. Landing page development - proceed the rise of your personal brand, more customized brand options, increase sales
 * 2. Sophisticated website maintenance / support - finishing something in works, bugfixing
 */

const PerksSection = () => {
	const { ref, inView } = useInView({
		threshold: 0.2
	})

	const [numberStyle, numberApi] = useSpring({
		from: { number: 0 },
		config: config.molasses
	}, [])

	const [trail, trailApi] = useTrail(2, () => ({ opacity: 0, y: -50 }))

	useEffect(() => {
		if (inView) {
			numberApi.start({
				number: 7
			})
			trailApi.start({
				opacity: 1,
				y: 0
			})
		}
	}, [inView, numberApi, trailApi])

	return (
		<Styles.Root>
			{trail[0] && (
				<Styles.Bullet style={trail[0]}>
					<Styles.BulletHeader>
						Landing page development
					</Styles.BulletHeader>
					proceed the rise of your personal brand, more customized brand options, increase sales
				</Styles.Bullet>
			)}

			<Styles.Bullet>
				<Styles.HeaderCoutner ref={ref}>
					{numberStyle.number.to(n => `${Math.round(n)}+`)}
				</Styles.HeaderCoutner>
				years of commercial experience
			</Styles.Bullet>

			{trail[1] && (
				<Styles.Bullet style={trail[1]}>
					<Styles.BulletHeader>
						Website support
					</Styles.BulletHeader>
					bug resolving of scripting issues, browser inconsistencies, styling errors
				</Styles.Bullet>
			)}
		</Styles.Root>
	)
}

export default PerksSection