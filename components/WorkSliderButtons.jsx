'use client'

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react'

import { useTranslations } from 'next-intl'

const WorkSliderButtons = ({ containerStyles, btnStyles, iconsStyles }) => {
	const t = useTranslations('Additional')

	const swiper = useSwiper()

	return (
		<div className={containerStyles}>
			<button
				className={btnStyles}
				onClick={() => swiper.slidePrev()}
				aria-label={t('previousProject')}
			>
				<PiCaretLeftBold
					className={iconsStyles}
					aria-hidden='true'
				/>
			</button>

			<button
				className={btnStyles}
				onClick={() => swiper.slideNext()}
				aria-label={t('nextProject')}
			>
				<PiCaretRightBold
					className={iconsStyles}
					aria-hidden='true'
				/>
			</button>
		</div>
	)
}

export default WorkSliderButtons
