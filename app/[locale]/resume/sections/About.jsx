import { resumeData } from '@/data/resume'
import { useTranslations } from 'next-intl'

const About = () => {
	const t = useTranslations('Resume.about')
	const { about } = resumeData

	return (
		<div className='flex flex-col gap-[30px]'>
			<h3 className='text-4xl font-bold'>{t('title')}</h3>

			<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
				{t('description')}
			</p>

			<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 w-full mx-auto xl:mx-0'>
				{about.info.map((item, index) => (
					<li
						key={index}
						className='flex items-center justify-center xl:justify-start gap-4'
					>
						<span className='text-white/60'>{item.field}</span>
						<span>{item.value}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default About
