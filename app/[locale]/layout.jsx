import { JetBrains_Mono } from 'next/font/google'
import '../globals.css'

/* COMPONENTS */
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetBrainsMono'
})

export const metadata = {
	title: 'K. A.'
}

export default async function RootLayout({ children, params }) {
	const { locale } = await params
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
