'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

import { links } from '@/data/navigation'

const MobileNav = () => {
	const pathName = usePathname()

	return (
		<Sheet>
			<SheetTrigger className='flex justify-center items-center'>
				<CiMenuFries className='text-[32px] text-accent' />
			</SheetTrigger>

			<SheetContent className='flex flex-col '>
				{/* LOGO */}
				<div className='mt-32 mb-40 text-center text-2xl'>
					<Link href='/'>
						<h1 className='text-4xl font-semibold'>
							K<span className='text-accent'>.</span>A
							<span className='text-accent'>.</span>
						</h1>
					</Link>
				</div>

				{/* NAVIGATION */}
				<nav className='flex flex-col justify-center items-center gap-8'>
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								href={link.path}
								className={`${
									link.path === pathName &&
									'text-accent border-b-2 border-accent'
								} text-xl hover:text-accent transition-all`}
							>
								{link.name}
							</Link>
						)
					})}
				</nav>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
