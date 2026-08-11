'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { motion } from 'framer-motion'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
			}}
			className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
		>
			<div className='container mx-auto mb-12'>
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'
				>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
						<TabsTrigger value='experience'>Experience</TabsTrigger>
						<TabsTrigger value='education'>Education</TabsTrigger>
						<TabsTrigger value='skills'>Technologies</TabsTrigger>
						<TabsTrigger value='about'>Contact Information</TabsTrigger>
					</TabsList>

					{/* CONTENT */}
					<div className='min-h-[70vh] w-full'>
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
