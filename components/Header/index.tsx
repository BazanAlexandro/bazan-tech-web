import { CONTACTS } from '../../constants/contacts'
import * as Styles from './styles'

const Header = () => {
	return (
		<Styles.Root>
			<Styles.ContactsPanel>
				<a href={`mailto:${CONTACTS.email}`}>
					email
				</a>
				/
				<a>
					twitter
				</a>
				/
				<a>
					telegram
				</a>
			</Styles.ContactsPanel>

			<Styles.NavigationPanel>
				<a>
					top
				</a>
				/
				<a>
					perks
				</a>
				/
				<a>
					portfolio
				</a>
				/
				<a>
					testimonials
				</a>
				/
				<a>
					CV
				</a>
			</Styles.NavigationPanel>
		</Styles.Root>
	)
}

export default Header
