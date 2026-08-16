import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { projects } from '@/data/projects'
import { useTranslations } from 'next-intl'

import WorkSliderButtons from '@/components/WorkSliderButtons'

const WorkSlider = ({ onSlideChange }) => {
	const tAdditional = useTranslations('Additional')

	return (
		<div className='w-full xl:w-[50%]'>
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				className='xl:h-[520px] mb-12'
				onSlideChange={onSlideChange}
			>
				{projects.map(project => (
					<SwiperSlide
						key={project.num}
						className='w-full'
					>
						<div className='h-[300px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
							<div className='absolute inset-0 bg-black/10 z-10' />

							<div className='relative w-full h-full'>
								<Image
									src={project.image}
									fill
									sizes='(min-width: 1280px) 50vw, 100vw'
									className='object-cover'
									alt={tAdditional('projectImage')}
									draggable={false}
								/>
							</div>
						</div>
					</SwiperSlide>
				))}

				<WorkSliderButtons
					containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
					btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
				/>
			</Swiper>
		</div>
	)
}

export default WorkSlider
