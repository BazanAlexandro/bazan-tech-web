import { CONTACTS } from '../../../../constants/contacts'
import { ExternalLink, Title } from '../../../common'
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
				<ExternalLink href={`mailto:${CONTACTS.email}`}>
					<EmailIcon />
				</ExternalLink>
				/
				<ExternalLink href={CONTACTS.twitter}>
					<TwitterIcon />
				</ExternalLink>
				/
				<ExternalLink href={CONTACTS.telegram}>
					<TelegramIcon />
				</ExternalLink>
				/
				<ExternalLink href={CONTACTS.upwork}>
					<Styles.UpworkIcon alt="upwork-icon" src={getImg('upwork.png')} />
				</ExternalLink>
			</Styles.ContactsRow>

			<ExternalLink href={CONTACTS.calendly}>Book a call</ExternalLink>
		</Styles.Root>
	)
}

export default ContactSection
