'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTranslations } from 'next-intl'

import { motion } from 'framer-motion'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'

const Resume = () => {
	const t = useTranslations('Resume')

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
			}}
			className='min-h-[80vh] flex justify-center py-12 xl:py-0'
		>
			<div className='container mx-auto mb-12'>
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'
				>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
						<TabsTrigger value='experience'>{t('tabs.experience')}</TabsTrigger>

						<TabsTrigger value='education'>{t('tabs.education')}</TabsTrigger>

						<TabsTrigger value='skills'>{t('tabs.skills')}</TabsTrigger>

						<TabsTrigger value='about'>{t('tabs.about')}</TabsTrigger>
					</TabsList>

					<div className='w-full'>
						<TabsContent
							value='experience'
							className='w-full'
						>
							<Experience />
						</TabsContent>

						<TabsContent
							value='education'
							className='w-full'
						>
							<Education />
						</TabsContent>

						<TabsContent
							value='skills'
							className='w-full h-full'
						>
							<Skills />
						</TabsContent>

						<TabsContent
							value='about'
							className='w-full text-center xl:text-left'
						>
							<About />
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume
