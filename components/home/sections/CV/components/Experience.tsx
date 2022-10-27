import styled from 'styled-components'
import { COLORS } from '../../../../../constants/colors'
import { ExperienceType } from "../../../../../types/Experience"

const Root = styled.div`
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

const Duration = styled.div`
	font-size: 7rem;
	// white-space: nowrap;
	background: linear-gradient(45deg, ${COLORS.light}, ${COLORS.lighter});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0.1em;
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
}

const Experience = ({
	item,
	isLast
}: Props) => {
	return (
		<>
			<Root>
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

				<Duration>
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
