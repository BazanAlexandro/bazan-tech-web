import { useEffect, useState } from 'react'
import { animated, useTrail } from 'react-spring'
import { COLORS } from '../../constants/colors'
import { CONTACTS } from '../../constants/contacts'
import { ExternalLink } from '../common'
import * as Styles from './styles'

const contacts = [{
	name: 'email',
	href: `mailto:${CONTACTS.email}`
}, {
	name: 'twitter',
	href: CONTACTS.twitter
}, {
	name: 'telegram',
	href: CONTACTS.telegram
}, {
	name: 'upwork',
	href: CONTACTS.upwork
}]

const links = [{
	name: 'top',
	href: '#top'
}, {
	name: 'perks',
	href: '#perks'
}, {
	name: 'testimonials',
	href: '#testimonials'
}, {
	name: 'CV',
	href: '#CV'
}, {
	name: 'contacts',
	href: '#contacts'
}]

const Header = () => {
	const contactsTrail = useTrail(4, { from: { opacity: 0 }, opacity: 1 })
	const linksTrail = useTrail(5, { from: { opacity: 0 }, opacity: 1 })

	const [bg, setBg] = useState(COLORS.primary)
	const [color, setColor] = useState(COLORS.lighter)

	useEffect(() => {
		const sectionRoots = [...document.querySelectorAll('[data-section]')]

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const newBg = entry.target.getAttribute('data-bg')
					const newColor = entry.target.getAttribute('data-color')
	
					setBg(newBg ?? COLORS.primary)
					setColor(newColor ?? COLORS.lighter)
				}
			})
		}, {
			threshold: 0.95
		})

		sectionRoots.forEach(r => {
			observer.observe(r)
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<Styles.Root id="header" bg={bg} color={color}>
			<Styles.ContactsPanel>
				{contactsTrail.map((styles, i) => (
					<Styles.HeaderItem key={i} style={styles}>
						<ExternalLink href={contacts[i].href}>
							{contacts[i].name}
						</ExternalLink>
						{i < contacts.length - 1 && "/"}
					</Styles.HeaderItem>
				))}
			</Styles.ContactsPanel>

			<Styles.NavigationPanel>
				{linksTrail.map((styles, i) => (
					<Styles.HeaderItem key={i}>
						<animated.a style={styles} href={links[i].href}>
							{links[i].name}
						</animated.a>
						{i < links.length - 1 && "/"}
					</Styles.HeaderItem>
				))}
			</Styles.NavigationPanel>
		</Styles.Root>
	)
}

export default Header
