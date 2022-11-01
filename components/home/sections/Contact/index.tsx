import { CONTACTS } from '../../../../constants/contacts'
import { ExternalLink, Title } from '../../../common'
import * as Styles from './styles'
import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import getImg from '../../../../utils/getImg'
import { COLORS } from '../../../../constants/colors'

const ContactSection = () => {
	return (
		<Styles.Root
			id="contacts"
			data-section
			data-bg={COLORS.light}
			data-color={COLORS.lighter}
		>
			<Title $colorFrom={COLORS.light}>
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

			<Styles.CallLink href={CONTACTS.calendly} $withHoverEffect>
				<span>Book a call </span>
			</Styles.CallLink>
		</Styles.Root>
	)
}

export default ContactSection
