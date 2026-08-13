'use client'

import { DE, GB, RU, UA } from 'country-flag-icons/react/3x2'
import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

const languages = [
	{
		code: 'en',
		label: 'English',
		flag: GB
	},
	{
		code: 'de',
		label: 'Deutsch',
		flag: DE
	},
	{
		code: 'ru',
		label: 'Русский',
		flag: RU
	},
	{
		code: 'ua',
		label: 'Українська',
		flag: UA
	}
]

const LanguageSwitcher = () => {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef(null)

	const currentLanguage = languages.find(language => language.code === locale)

	const CurrentFlag = currentLanguage?.flag

	const changeLocale = newLocale => {
		setIsOpen(false)

		router.replace(pathname, {
			locale: newLocale
		})
	}

	/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */
	useEffect(() => {
		const handleClickOutside = event => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div
			ref={dropdownRef}
			className='relative'
		>
			{/* TRIGGER */}
			<button
				type='button'
				onClick={() => setIsOpen(prev => !prev)}
				aria-label='Select language'
				aria-expanded={isOpen}
				className='flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/10'
			>
				{CurrentFlag && (
					<CurrentFlag
						title={currentLanguage.label}
						className='h-4 w-6 rounded-[2px]'
					/>
				)}

				<ChevronDown
					size={15}
					className={`text-white/60 transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{/* DROPDOWN */}
			<div
				className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 xl:left-auto xl:right-0 xl:translate-x-0 z-50 min-w-[155px] origin-top rounded-xl border border-white/10 bg-primary/95 p-1.5 shadow-xl backdrop-blur-xl transition-all duration-200 ${
					isOpen
						? 'visible scale-100 opacity-100'
						: 'invisible scale-95 opacity-0'
				}`}
			>
				{languages.map(language => {
					const isActive = locale === language.code
					const Flag = language.flag

					return (
						<button
							key={language.code}
							type='button'
							onClick={() => changeLocale(language.code)}
							className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
								isActive
									? 'bg-accent/10 text-accent'
									: 'text-white/60 hover:bg-white/5 hover:text-white'
							}`}
						>
							<span className='flex items-center gap-3'>
								<Flag
									title={language.label}
									className='h-4 w-6 rounded-[2px]'
								/>

								<span>{language.label}</span>
							</span>

							{isActive && (
								<Check
									size={15}
									strokeWidth={2}
								/>
							)}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default LanguageSwitcher
