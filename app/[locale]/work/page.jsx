'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import 'swiper/css'

import { projects } from '@/data/projects'

import WorkInfo from './components/WorkInfo'
import WorkSlider from './components/WorkSlider'

const Work = () => {
	const [project, setProject] = useState(projects[0])

	const handleSlideChange = swiper => {
		setProject(projects[swiper.activeIndex])
	}

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					delay: 2.4,
					duration: 0.4,
					ease: 'easeIn'
				}
			}}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
		>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
					<WorkInfo project={project} />

					<WorkSlider onSlideChange={handleSlideChange} />
				</div>
			</div>
		</motion.section>
	)
}

export default Work
