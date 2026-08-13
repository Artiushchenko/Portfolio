import { ScrollArea } from '@/components/ui/scroll-area'
import { resumeData } from '@/data/resume'
import { useTranslations } from 'next-intl'

const Education = () => {
	const t = useTranslations('Resume.education')
	const { education } = resumeData

	return (
		<div className='flex flex-col gap-[30px] text-center xl:text-left'>
			<h3 className='text-4xl font-bold'>{t('title')}</h3>

			<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
				{t('description')}
			</p>

			<ScrollArea className='h-[400px]'>
				<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
					{education.items.map((item, index) => (
						<li
							key={index}
							className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
						>
							<span className='text-accent'>{item.duration}</span>

							<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
								{t(`degrees.${item.degree}`)}
							</h3>

							<div className='flex items-center gap-3'>
								<p className='text-white/60 leading-normal'>
									{t(`institutions.${item.institution}`)}
								</p>
							</div>
						</li>
					))}
				</ul>
			</ScrollArea>
		</div>
	)
}

export default Education
