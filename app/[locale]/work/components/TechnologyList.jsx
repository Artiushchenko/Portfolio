import { technologies } from '@/data/technologies'

const TechnologyList = ({ stack }) => {
	return (
		<ul className='flex flex-wrap gap-2'>
			{stack.map(techKey => {
				const technology = technologies[techKey]

				if (!technology) return null

				const { name, icon: Icon, color } = technology

				return (
					<li
						key={techKey}
						className='group relative flex items-center gap-2 px-3 py-2 border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:border-transparent'
					>
						<span
							className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300'
							style={{ backgroundColor: color }}
						/>

						<Icon
							aria-hidden='true'
							className='relative z-10 text-lg transition-all duration-300 group-hover:scale-110'
							style={{ color }}
						/>

						<span className='relative z-10 text-sm text-white/50 transition-colors duration-300 group-hover:text-white'>
							{name}
						</span>

						<span
							className='absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
							style={{
								boxShadow: `0 0 20px ${color}20`
							}}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default TechnologyList
