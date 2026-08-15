import { routing } from '@/i18n/routing'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export default function sitemap() {
	const pages = ['', '/resume', '/work']

	return routing.locales.flatMap(locale =>
		pages.map(page => ({
			url: `${siteUrl}/${locale}${page}`,
			lastModified: new Date()
		}))
	)
}
