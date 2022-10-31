import { useCallback, useMemo, useState } from 'react'
import { COLORS } from '../../../../constants/colors'
import * as Styles from './styles'

function getOffset(delta: number): number {
	if (Math.abs(delta) > 100) return Math.sign(delta) * 100
	return delta
}

const Welcome = () => {
	const [top, setTop] = useState(0)
	const [left, setLeft] = useState(0)

	const bgStyle = useMemo(() => ({
		transform: `translate(${-left}px,${-top}px) scale(1.2)`
	}), [left, top])

	const fgStyle = useMemo(() => ({
		transform: `translate(${left}px,${top}px)`
	}), [left, top])

	const handleMouseMove = useCallback((e: any) => {
		setLeft(cur => getOffset(cur += e.movementX / 10))
		setTop(cur => getOffset(cur += e.movementY / 10))
	}, [])

	return (
		<Styles.Root onMouseMove={handleMouseMove}
			id="top"
			data-section
			data-bg={COLORS.primary}
			data-color={COLORS.lighter}
		>
			<Styles.Bg style={bgStyle} />
			<Styles.Fg src="/assets/Person.png" style={fgStyle} />

			<Styles.TextContainer style={bgStyle}>
				<Styles.Title>
					Alexander Bazan
				</Styles.Title>
				<Styles.Subtitle>
					Skilled frontend developer with attention to customer needs
				</Styles.Subtitle>
			</Styles.TextContainer>
		</Styles.Root>
	)
}

export default Welcome