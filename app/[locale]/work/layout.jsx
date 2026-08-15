import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
	const { locale } = params

	const t = await getTranslations({
		locale,
		namespace: 'Metadata.work'
	})

	return {
		title: t('title'),
		description: t('description'),

		alternates: {
			canonical: `/${locale}/work`
		},

		openGraph: {
			title: t('title'),
			description: t('description'),
			url: `/${locale}/work`
		}
	}
}

export default function WorkLayout({ children }) {
	return children
}
