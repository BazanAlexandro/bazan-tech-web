import styled from 'styled-components'
import { ExperienceType } from "../../../../../types/Experience"

const Root = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1em;
	align-items: center;
`

const Details = styled.div`
	display: flex;
	flex-direction: column;
`

const Duration = styled.div`
`

const Title = styled.h2`

`

const BulletList = styled.ul`
	padding: 0;
	margin: 0;
`

const Bullet = styled.li``

type Props = {
	item: ExperienceType
}

const Experience = ({
	item
}: Props) => {
	return (
		<Root>
			<Details>
				<Title>
					{item.title} at {item.company}
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
				{item.duration[0]} - {item.duration[1]}
			</Duration>
		</Root>
	)
}

export default Experience
