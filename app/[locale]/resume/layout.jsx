import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
	const { locale } = params

	const t = await getTranslations({
		locale,
		namespace: 'Metadata.resume'
	})

	return {
		title: t('title'),
		description: t('description'),

		alternates: {
			canonical: `/${locale}/resume`
		},

		openGraph: {
			title: t('title'),
			description: t('description'),
			url: `/${locale}/resume`
		}
	}
}

export default function ResumeLayout({ children }) {
	return children
}
