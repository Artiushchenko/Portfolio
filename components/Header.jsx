import Link from 'next/link'

/* COMPONENTS */
import LanguageSwitcher from './LanguageSwitcher'
import MobileNav from './MobileNav'
import Nav from './Nav'

import { useTranslations } from 'next-intl'

const Header = () => {
	const t = useTranslations('Additional')

	return (
		<>
			<header className='py-8 xl:py-12 text-white'>
				<div className='container mx-auto flex justify-between items-center'>
					{/* LOGO */}
					<Link
						href='/'
						aria-label={t('logo')}
						draggable={false}
					>
						<span className='text-4xl font-semibold'>
							K<span className='text-accent'>.</span>A
							<span className='text-accent'>.</span>
						</span>
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

			<div className='fixed right-6 top-6 z-50 xl:right-8 xl:top-8 hidden xl:block'>
				<LanguageSwitcher />
			</div>
		</>
	)
}

export default Header
