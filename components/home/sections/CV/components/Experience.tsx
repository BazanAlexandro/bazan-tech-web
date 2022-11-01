import { animated, config, useSpring } from 'react-spring'
import styled from 'styled-components'
import { COLORS } from '../../../../../constants/colors'
import { ExperienceType } from "../../../../../types/Experience"
import { GradientText } from '../../../../common'

const Root = styled(animated.div)`
	display: flex;
	justify-content: space-between;
	padding: 1em;
	align-items: center;
	color: inherit;
	gap: 2em;
`

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5em;
`

const Duration = styled(GradientText)`
	font-size: 7rem;
`

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: 400;
	margin: 0;
`

const BulletList = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: circle;
	line-height: 1.6;
	font-weight: 300;
`

const CompanyName = styled.span`
	text-decoration: underline;
`

const Delimiter = styled.hr`
	width: 100%;
	border: none;
	border-bottom: thin dashed white;
`

const Bullet = styled.li``

type Props = {
	item: ExperienceType
	isLast?: boolean
	style: any
}

const Experience = ({
	item,
	isLast,
	style
}: Props) => {
	return (
		<>
			<Root style={style}>
				<Details>
					<Title>
						{item.title} at <CompanyName>{item.company}</CompanyName>
					</Title>

					<BulletList>
						{item.bullets.map((b, ind) => (
							<Bullet key={ind}>
								{b}
							</Bullet>
						))}
					</BulletList>
				</Details>

				<Duration withAnimation>
					<div>
						{item.duration[1]}
					</div>
					<div>
						{item.duration[0]}
					</div>
				</Duration>
			</Root>
			{!isLast && (
				<Delimiter />
			)}
		</>
	)
}

export default Experience
