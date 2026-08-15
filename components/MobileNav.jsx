'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import LanguageSwitcher from './LanguageSwitcher'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger
} from './ui/sheet'

import { links } from '@/data/navigation'
import { useTranslations } from 'next-intl'

const MobileNav = () => {
	const t = useTranslations('Navigation')
	const tAdditional = useTranslations('Additional')

	const pathName = usePathname()

	const [open, setOpen] = useState(false)

	return (
		<Sheet
			open={open}
			onOpenChange={setOpen}
		>
			<SheetTrigger
				aria-label={t('openMobileNavigation')}
				className='flex justify-center items-center'
			>
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>

			<SheetContent className='flex flex-col '>
				<SheetTitle className='sr-only'>Navigation</SheetTitle>

				<SheetDescription className='sr-only'>
					Mobile navigation menu
				</SheetDescription>

				{/* LOGO */}
				<div className='mt-32 mb-20 text-center text-2xl'>
					<Link
						href='/'
						aria-label={tAdditional('logo')}
						draggable={false}
					>
						<span className='text-4xl font-semibold'>
							K<span className='text-accent'>.</span>A
							<span className='text-accent'>.</span>
						</span>
					</Link>
				</div>

				{/* NAVIGATION */}
				<nav
					aria-label={t('mainNavigation')}
					className='mb-20 flex flex-col justify-center items-center gap-8'
				>
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								href={link.path}
								onClick={() => setOpen(false)}
								className={`${
									link.path === pathName &&
									'text-accent border-b-2 border-accent'
								} text-xl hover:text-accent transition-all`}
								draggable={false}
							>
								{t(link.key)}
							</Link>
						)
					})}
				</nav>

				{/* LANGUAGE */}
				<div className='flex justify-center'>
					<LanguageSwitcher />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
