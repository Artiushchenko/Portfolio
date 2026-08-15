import { JetBrains_Mono } from 'next/font/google'
import '../globals.css'

/* COMPONENTS */
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'

import { routing } from '@/i18n/routing'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetBrainsMono'
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const localeMap = {
	en: 'en',
	de: 'de',
	ru: 'ru',
	ua: 'uk'
}

export async function generateMetadata({ params }) {
	const { locale } = params

	const t = await getTranslations({
		locale,
		namespace: 'Metadata'
	})

	const language = localeMap[locale] || 'en'

	const languages = Object.fromEntries(
		routing.locales.map(locale => [localeMap[locale], `${siteUrl}/${locale}`])
	)

	return {
		metadataBase: new URL(siteUrl),
		title: {
			default: `K. A. | ${t('home.title')}`,
			template: 'K. A. | %s'
		},
		description: t('home.description'),
		alternates: {
			canonical: `/${locale}`,
			languages: {
				...languages,
				'x-default': `${siteUrl}/en`
			}
		},
		robots: {
			index: true,
			follow: true
		},
		openGraph: {
			type: 'website',
			url: `${siteUrl}/${locale}`,
			title: t('home.title'),
			description: t('home.description'),
			siteName: 'K. A.',
			locale: language,
			images: [
				{
					url: '/assets/og-image.jpg',
					width: 1200,
					height: 630,
					alt: 'K. A.'
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title: t('home.title'),
			description: t('home.description'),
			images: ['/assets/og-image.jpg']
		}
	}
}

export default async function RootLayout({ children, params }) {
	const { locale } = params
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={jetBrainsMono.variable}>
				<NextIntlClientProvider messages={messages}>
					<Header />
					<StairTransition />
					<PageTransition>{children}</PageTransition>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
