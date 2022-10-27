import { CONTACTS } from '../../../../constants/contacts'
import { Title } from '../../../common'
import * as Styles from './styles'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import getImg from '../../../../utils/getImg'

const ContactSection = () => {
	return (
		<Styles.Root>
			<Title>
				Contacts
			</Title>

			<Styles.ContactsRow>
				<a href={`mailto:${CONTACTS.email}`}>
					<EmailIcon />
				</a>
				/
				<a href={CONTACTS.twitter}>
					<TwitterIcon />
				</a>
				/
				<a href={CONTACTS.telegram}>
					<TelegramIcon />
				</a>
				/
				<a href={CONTACTS.upwork}>
					<Styles.UpworkIcon alt="upwork-icon" src={getImg('upwork.png')} />
				</a>
			</Styles.ContactsRow>

			<a href={CONTACTS.calendly}>Book a call</a>
		</Styles.Root>
	)
}

export default ContactSection
