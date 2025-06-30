'use client'

import CountUp from 'react-countup'

import { stats } from '@/data/statistics'

const Stats = () => {
	return (
		<section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap justify-center gap-8 max-w-[80vw] mx-auto'>
					{stats.map((item, index) => {
						return (
							<div
								key={index}
								className='flex-1 flex gap-4 items-center justify-center xl:justify-center'
							>
								<CountUp
									end={item.num}
									duration={5}
									delay={2}
									suffix='+'
									className='text-3xl xl:text-5xl font-extrabold'
								/>
								<p
									className={`${
										item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
									} leading-snug text-white/80`}
								>
									{item.text}
								</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Stats
