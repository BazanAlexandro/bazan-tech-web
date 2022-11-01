import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, config, useTrail } from 'react-spring'
import { COLORS } from '../../../../constants/colors'
import getImg from '../../../../utils/getImg'
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

	const [trail, trailApi] = useTrail(3, () => ({ opacity: 0, y: -50 }))

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
		<Styles.Root id="perks"
			data-section
			data-bg={COLORS.light}
			data-color={COLORS.lighter}
		>
			<Styles.DotBackground />

			<Styles.Bullet>
				<Styles.HeaderCoutner ref={ref}>
					{numberStyle.number.to(n => `${Math.round(n)}+`)}
				</Styles.HeaderCoutner>
				Years of commercial experience
			</Styles.Bullet>

			<Styles.PerkList>
				{trail[0] && (
					<Styles.Bullet style={trail[0]}>
						<Styles.BulletHeader>
							Landing page development
						</Styles.BulletHeader>
						Responsive Website and Feature development of Single Page Apps as well as Server-Side ones with React, Typescript, Next.js
					</Styles.Bullet>
				)}

				{trail[1] && (
					<Styles.Bullet style={trail[1]}>
						<Styles.BulletHeader>
							Website support
						</Styles.BulletHeader>
						Bug resolving of scripting issues, browser inconsistencies, styling errors
					</Styles.Bullet>
				)}

				{trail[2] && (
					<Styles.Bullet style={trail[2]}>
						Performance optimizations, SEO, Google PageSpeed insights
					</Styles.Bullet>
				)}
			</Styles.PerkList>
		</Styles.Root>
	)
}

export default PerksSection