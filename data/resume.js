import { BiLogoTypescript } from 'react-icons/bi'
import {
	FaCss3,
	FaDocker,
	FaGitAlt,
	FaGitlab,
	FaHtml5,
	FaJsSquare,
	FaLaravel,
	FaNodeJs,
	FaPhp,
	FaReact,
	FaSass
} from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { IoLogoVue } from 'react-icons/io5'
import {
	SiAdobephotoshop,
	SiCanva,
	SiFigma,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNuxtdotjs,
	SiPostgresql,
	SiRedux,
	SiTailwindcss
} from 'react-icons/si'

export const resumeData = {
	about: {
		icon: '/assets/resume/badge.svg',
		info: [
			{
				field: 'E-Mail',
				value: 'kyrylo.artiushchenko@gmail.com'
			}
		]
	},
	experience: {
		icon: '/assets/resume/badge.svg',
		items: [
			{
				company: 'IBTMG | UA',
				position: 'frontendDeveloper',
				duration: '07.2022 - 06.2023'
			},
			{
				company: 'IBTMG | UA',
				position: 'frontendDeveloper',
				duration: '07.2023 - 12.2023'
			},
			{
				company: 'Palmo | UA',
				position: 'fullStackDeveloper',
				duration: '06.2024 - 11.2025'
			},
			{
				company: 'Jaffle | AU',
				position: 'fullStackDeveloper',
				duration: '03.2025 - 06.2025'
			}
		]
	},
	education: {
		icon: '/assets/resume/cap.svg',
		items: [
			{
				institution: 'donbassStateEngineeringAcademy',
				degree: 'bachelor',
				duration: '2020 - 2024'
			},
			{
				institution: 'kharkivNationalUniversityRadioElectronics',
				degree: 'master',
				duration: '2024 - 2025'
			}
		]
	},
	skills: {
		categories: [
			{
				name: 'frontend',
				skills: [
					{ name: 'HTML5', icon: <FaHtml5 /> },
					{ name: 'CSS3', icon: <FaCss3 /> },
					{ name: 'SASS', icon: <FaSass /> },
					{ name: 'Tailwind CSS', icon: <SiTailwindcss /> },
					{ name: 'JavaScript', icon: <FaJsSquare /> },
					{ name: 'TypeScript', icon: <BiLogoTypescript /> },
					{ name: 'React', icon: <FaReact /> },
					{ name: 'Vue.js', icon: <IoLogoVue /> },
					{ name: 'Next.js', icon: <SiNextdotjs /> },
					{ name: 'Nuxt.js', icon: <SiNuxtdotjs /> },
					{ name: 'Redux', icon: <SiRedux /> }
				]
			},
			{
				name: 'backend',
				skills: [
					{ name: 'Node.js', icon: <FaNodeJs /> },
					{ name: 'NestJS', icon: <SiNestjs /> },
					{ name: 'PHP', icon: <FaPhp /> },
					{ name: 'Laravel', icon: <FaLaravel /> }
				]
			},
			{
				name: 'databases',
				skills: [
					{ name: 'PostgreSQL', icon: <SiPostgresql /> },
					{ name: 'MySQL', icon: <GrMysql /> },
					{ name: 'MongoDB', icon: <SiMongodb /> }
				]
			},
			{
				name: 'tools',
				skills: [
					{ name: 'Git', icon: <FaGitAlt /> },
					{ name: 'GitLab', icon: <FaGitlab /> },
					{ name: 'Docker', icon: <FaDocker /> }
				]
			},
			{
				name: 'design',
				skills: [
					{ name: 'Figma', icon: <SiFigma /> },
					{ name: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
					{ name: 'Canva', icon: <SiCanva /> }
				]
			}
		]
	}
}
