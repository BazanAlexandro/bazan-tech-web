import { animated, useTrail } from 'react-spring'
import { CONTACTS } from '../../constants/contacts'
import * as Styles from './styles'

const contacts = [{
	name: 'email',
	href: `mailto:${CONTACTS.email}`
}, {
	name: 'twitter'
}, {
	name: 'telegram'
}, {
	name: 'upwork'
}]

const links = [{
	name: 'top'
}, {
	name: 'perks'
}, {
	name: 'portfolio'
}, {
	name: 'testimonials'
}, {
	name: 'CV'
}, {
	name: 'contacts'
}]

const Header = () => {
	const contactsTrail = useTrail(4, { from: { opacity: 0 }, opacity: 1 })
	const linksTrail = useTrail(6, { from: { opacity: 0 }, opacity: 1 })

	return (
		<Styles.Root>
			<Styles.ContactsPanel>
				{contactsTrail.map((styles, i) => (
					<Styles.HeaderItem key={i} style={styles}>
						<a>
							{contacts[i].name}
						</a>
						{i < contacts.length - 1 && "/"}
					</Styles.HeaderItem>
				))}
			</Styles.ContactsPanel>

			<Styles.NavigationPanel>
				{linksTrail.map((styles, i) => (
					<Styles.HeaderItem key={i}>
						<animated.a style={styles}>
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
