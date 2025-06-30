import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

/* COMPONENTS */
import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'

const Home = () => {
	return (
		<section className='h-full'>
			<div className='container mx-auto h-full'>
				<div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
					{/* TEXT */}
					<div className='text-center xl:text-left order-2 xl:order-none'>
						<span className='text-xl'>Full Stack Developer</span>
						<h1 className='h1 mb-6'>
							Hello, I&apos;m
							<br />
							<span className='text-accent'>Kyrylo Artiushchenko</span>
						</h1>
						<p className='max-w-[500px] mb-9 text-white/80'>
							I develop end-to-end digital solutions that align with business
							objectives, focusing on scalability, performance, and measurable
							impact.
						</p>

						{/* BUTTON AND SOCIALS */}
						<div className='flex flex-col xl:flex-row items-center gap-8'>
							<a href='/documents/resume.pdf' download>
								<Button
									asChild
									variant='outline'
									size='lg'
									className='uppercase'
								>
									<span className='flex items-center gap-2'>
										<span>Download CV</span>
										<FiDownload className='text-xl' />
									</span>
								</Button>
							</a>
							<div className='mb-8 xl:mb-0'>
								<Social
									containerStyles='flex gap-6'
									iconStyles='w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
								/>
							</div>
						</div>
					</div>

					{/* PHOTO */}
					<div className='order-1 xl:order-none mb-8 xl:mb-0'>
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	)
}

export default Home
