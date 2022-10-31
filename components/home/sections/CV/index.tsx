import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { config, useTrail } from 'react-spring'
import { ExperienceType } from '../../../../types/Experience'
import { Title } from '../../../common'
import Experience from './components/Experience'
import * as Styles from './styles'

const exps: ExperienceType[] = [{
	title: 'Senior Frontend Developer',
	company: 'Luxoft',
	companyImage: 'sadf',
	companyLink: 'https://www.luxoft.com',
	duration: ['2021', '2022'],
	bullets: [
		'Developed an app that monitors and provisions data for one of internal banking systems',
		'Led every demo in a team as a frontend developer and became one of the top performers',
		'Have written over 400 unit tests to increase project maintainability',
		'Fixed project CI workflow that resulted in faster build time by 30%',
		'Rewritten major part of the project in order to make the app look more modern'
	]
}, {
	title: 'Full-Stack Developer (React, Node.js)',
	company: 'Ciklum',
	companyImage: 'asdf',
	companyLink: 'http://www.ciklum.com',
	duration: ['2018', '2021'],
	bullets: [
		'Developed mobile app rated as #6 free News app in Norway (IOS), and has over 100k downloads (Android)',
		'Developed user-facing video media service adapted for extreme high-loads',
		'Was responsible for interviewing frontend developers in a team for 1.5 years, which resulted in multiple time-tested successful hires',
		'Implemented system for storing in-house ads and convenient distribution of them',
		'Implemented web crawler tool that analyses tracking functionality across company websites and produces reports for specific ones where tracking is not in place'
	]
}, {
	title: 'Full-Stack Developer (.NET, Javascript)',
	company: 'HYS',
	companyImage: 'asdfsfa',
	companyLink: 'http://www.hys-enterprise.com/',
	duration: ['2015', '2017'],
	bullets: [
		'As a part of the team maintained backend systems for large telecom project to provide 24h uptime',
		'Developed backend for mobile app, which allowed a high customisation to avoid unnecessary app redeploys',
		'As tech customer support specialist closed over 300 tickets',
		'Developed CMS for customer support that resulted in freeing substantial development resources',
		'Developed a tool that searched for invalid service configurations for phone numbers in a system. Tool allowed to preemptively fix service problems, that resulted in reduction of customer support calls'
	]
}]

const CVSection = () => {
	const { ref, inView } = useInView({
		threshold: 0.2
	})

	const [trail, trailApi] = useTrail(exps.length, () => ({ opacity: 0, y: -50, config: config.molasses }))

	const components = exps.map((exp, ind) => (
		<Experience item={exp} isLast={ind === exps.length - 1} key={ind} style={trail[ind]} />
	))

	useEffect(() => {
		if (inView) {
			trailApi.start({
				opacity: 1,
				y: 0
			})
		}
	}, [inView, trailApi])

	return (
		<Styles.Root ref={ref} id="CV">
			<Title>
				Experiences
			</Title>
			{components}
		</Styles.Root>
	)
}

export default CVSection
