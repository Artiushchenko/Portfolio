import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

import { resumeData } from '@/data/resume'
import { technologies } from '@/data/technologies'

import { useTranslations } from 'next-intl'

const Skills = () => {
	const t = useTranslations('Resume.skills')
	const { skills } = resumeData

	return (
		<div className='flex flex-col gap-[30px]'>
			<div className='flex flex-col gap-[30px] text-center xl:text-left'>
				<h3 className='text-4xl font-bold'>{t('title')}</h3>

				<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
					{t('description')}
				</p>
			</div>

			<ScrollArea>
				<div className='flex flex-col gap-8 pr-4'>
					{skills.categories.map(category => (
						<div key={category.name}>
							<h4 className='text-2xl font-semibold mb-4'>
								{t(`categories.${category.name}`)}
							</h4>

							<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
								{category.skills.map(skillKey => {
									const technology = technologies[skillKey]

									if (!technology) {
										return null
									}

									const { name, icon: Icon, color } = technology

									return (
										<li key={skillKey}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className='w-full h-[90px] sm:h-[100px] md:h-[110px] bg-[#232329] rounded-xl flex justify-center items-center group'>
														<Icon
															aria-hidden='true'
															className='text-5xl transition-all duration-300 group-hover:scale-110'
															style={{ color }}
														/>
													</TooltipTrigger>

													<TooltipContent>
														<p>{name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									)
								})}
							</ul>
						</div>
					))}
				</div>
			</ScrollArea>
		</div>
	)
}

export default Skills
