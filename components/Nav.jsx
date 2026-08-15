'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

import { links } from '@/data/navigation'

const Nav = () => {
	const t = useTranslations('Navigation')
	const pathName = usePathname()

	return (
		<nav
			aria-label={t('mainNavigation')}
			className='flex gap-8'
		>
			{links.map(link => {
				return (
					<Link
						key={link.key}
						href={link.path}
						className={`${
							link.path === pathName && 'text-accent border-b-2 border-accent'
						} font-medium hover:text-accent transition-all`}
						draggable={false}
					>
						{t(link.key)}
					</Link>
				)
			})}
		</nav>
	)
}

export default Nav
