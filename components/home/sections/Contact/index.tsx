import { CONTACTS } from '../../../../constants/contacts'
import * as Styles from './styles'

const ContactSection = () => {
	return (
		<Styles.Root>
			<Styles.Title>
				Contacts
			</Styles.Title>

			<Styles.ContactsRow>
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
				/
				<a>
					upwork
				</a>
			</Styles.ContactsRow>

			<a>Book a call</a>
		</Styles.Root>
	)
}

export default ContactSection
