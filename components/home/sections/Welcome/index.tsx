import { useCallback, useEffect, useMemo, useState } from 'react'
import * as Styles from './styles'

const MAX_OFFSET = 100

function getOffset(delta: number): number {
	if (Math.abs(delta) > 100) return Math.sign(delta) * 100
	return delta
}

const Welcome = () => {
	const [top, setTop] = useState(0)
	const [left, setLeft] = useState(0)

	const videoStyle = useMemo(() => ({
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
		<Styles.Root onMouseMove={handleMouseMove}>
			<Styles.BGVideo muted loop autoPlay src="/assets/Welcome_BG_Video.mov" style={videoStyle}>
			</Styles.BGVideo>
			<Styles.Fg src="/assets/Person.png" style={fgStyle} />

			<Styles.TextContainer style={videoStyle}>
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