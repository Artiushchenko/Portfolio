import { useTranslations } from 'next-intl'

import TechnologyList from './TechnologyList'

const WorkInfo = ({ project }) => {
	const t = useTranslations('Work.descriptions')

	return (
		<div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
			<div className='flex flex-col gap-[30px] h-[50%]'>
				<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
					{project.num}
				</div>

				<div className='text-6xl font-bold leading-none text-accent-hover'>
					{project.title}
				</div>

				<h2 className='text-2xl font-bold leading-none text-white'>
					{project.category}
				</h2>

				<p className='text-white/60'>{t(project.descriptionKey)}</p>

				<TechnologyList stack={project.stack} />
			</div>
		</div>
	)
}

export default WorkInfo
