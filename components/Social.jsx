import Link from 'next/link'

import { socials } from '@/data/socials'

const Social = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link
						key={index}
						href={item.path}
						className={iconStyles}
						target='_blank'
					>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Social
