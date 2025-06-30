import { BiLogoTypescript } from 'react-icons/bi'
import {
	FaCss3,
	FaDocker,
	FaHtml5,
	FaJsSquare,
	FaLaravel,
	FaNodeJs,
	FaPhp,
	FaReact,
	FaSass,
} from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { IoLogoVue } from 'react-icons/io5'
import {
	SiFirebase,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiNuxtdotjs,
	SiPostgresql,
	SiRedux,
	SiTailwindcss,
} from 'react-icons/si'

/* ABOUT */
export const about = {
	title: 'Contact Information',
	description:
		'For any questions that may arise, please feel free to contact me via the email address provided below or through the social media links on the home page.',
	info: [
		{
			fieldName: 'E-mail',
			fieldValue: 'kyrylo.artiushchenko@gmail.com',
		},
	],
}

/* EXPERIENCE */
export const experience = {
	icon: '/assets/resume/badge.svg',
	title: 'Experience',
	description: "The road I've coded — my professional journey.",
	items: [
		{
			company: 'IBTMG | UA',
			position: 'Frontend Developer',
			duration: '07.2022 - 06.2023',
		},
		{
			company: 'IBTMG | UA',
			position: 'Frontend Developer',
			duration: '07.2023 - 12.2023',
		},
		{
			company: 'Palmo | UA',
			position: 'Full Stack Developer',
			duration: '06.2024 - Present',
		},
		{
			company: 'Jaffle | AU',
			position: 'Full Stack Developer',
			duration: '03.2025 - 06.2025',
		},
	],
}

/* EDUCATION */
export const education = {
	icon: '/assets/resume/cap.svg',
	title: 'Education',
	description: 'From lecture halls to launchpads — the technical foundation.',
	items: [
		{
			institution: 'Donbass State Engineering Academy',
			degree: 'Bachelor of Computer Science',
			duration: '2020 - 2024',
		},
		{
			institution: 'Kharkiv National University of Radio Electronics',
			degree: 'Master of Computer Science',
			duration: '2024 - 2025',
		},
	],
}

/* SKILLS */
export const skills = {
	title: 'Technologies',
	description: 'The engine under the hood — technologies in motion.',
	skillList: [
		{
			name: 'HTML 5',
			icon: <FaHtml5 />,
		},
		{
			name: 'CSS 3',
			icon: <FaCss3 />,
		},
		{
			name: 'SASS',
			icon: <FaSass />,
		},
		{
			name: 'Tailwind CSS',
			icon: <SiTailwindcss />,
		},
		{
			name: 'JavaScript',
			icon: <FaJsSquare />,
		},
		{
			name: 'TypeScript',
			icon: <BiLogoTypescript />,
		},
		{
			name: 'PHP',
			icon: <FaPhp />,
		},
		{
			name: 'Node JS',
			icon: <FaNodeJs />,
		},
		{
			name: 'React JS',
			icon: <FaReact />,
		},
		{
			name: 'Vue JS',
			icon: <IoLogoVue />,
		},
		{
			name: 'Next JS',
			icon: <SiNextdotjs />,
		},
		{
			name: 'Nuxt JS',
			icon: <SiNuxtdotjs />,
		},
		{
			name: 'Laravel',
			icon: <FaLaravel />,
		},
		{
			name: 'Nest JS',
			icon: <SiNestjs />,
		},
		{
			name: 'Firebase',
			icon: <SiFirebase />,
		},
		{
			name: 'Redux',
			icon: <SiRedux />,
		},
		{
			name: 'MongoDB',
			icon: <SiMongodb />,
		},
		{
			name: 'PostgreSQL',
			icon: <SiPostgresql />,
		},
		{
			name: 'MySQL',
			icon: <GrMysql />,
		},
		{
			name: 'Docker',
			icon: <FaDocker />,
		},
	],
}
