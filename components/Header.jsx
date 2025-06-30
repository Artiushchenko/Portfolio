import Link from 'next/link'

/* COMPONENTS */
import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			<div className='container mx-auto flex justify-between items-center'>
				{/* LOGO */}
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						K<span className='text-accent'>.</span>A
						<span className='text-accent'>.</span>
					</h1>
				</Link>

				{/* DESKTOP NAVIGATION */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
				</div>

				{/* MOBILE NAVIGATION */}
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	)
}

export default Header
