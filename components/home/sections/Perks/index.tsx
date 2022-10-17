import * as Styles from './styles'

/**
 * 7 years of experience in the middle
 * 1. Landing page development - proceed the rise of your personal brand, more customized brand options, increase sales
 * 2. Sophisticated website maintenance / support - finishing something in works, bugfixing
 */

const PerksSection = () => {
	return (
		<Styles.Root>
			<Styles.Bullet>
				<Styles.BulletHeader>
					Landing page development
				</Styles.BulletHeader>
				proceed the rise of your personal brand, more customized brand options, increase sales
			</Styles.Bullet>

			<Styles.Bullet>
				<Styles.HeaderCoutner>
					7+
				</Styles.HeaderCoutner>
				years of commercial experience
			</Styles.Bullet>

			<Styles.Bullet>
				<Styles.BulletHeader>
					Website support
				</Styles.BulletHeader>
				bug resolving of scripting issues, browser inconsistencies, styling errors
			</Styles.Bullet>
		</Styles.Root>
	)
}

export default PerksSection