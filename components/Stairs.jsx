import { motion } from 'framer-motion'

/* VARIANTS */
const stairAnimation = {
	initial: {
		top: '0%',
	},
	animate: {
		top: '100%',
	},
	exit: {
		top: ['100%', '0%'],
	},
}

/* CALCULATE THE REVERSE INDEX FOR STAGGERED DELAY */
const reverseIndex = index => {
	const TOTAL_STEPS = 6 // NUMBER OF STEPS

	return TOTAL_STEPS - index - 1
}

const Stairs = () => {
	return (
		<>
			{/* RENDER 6 MOTION DIVS, EACH REPRESENTING A STEP OF THE STAIRS.
			EACH DIV WILL HAVE THE SAME ANIMATION DEFINED BY THE STAIRSANIMATION OBJECT.
			THE DELAY FOR EACH DIV IS CALCULATED DYNAMICALLY BASED ON IT'S REVERSED INDEX,
			CREATING A STAGGERED EFFECT WITH DECREASING DELAY FOR EACH SUBSEQUENT STEP.
			*/}
			{[...Array(6)].map((_, index) => {
				return (
					<motion.div
						key={index}
						variants={stairAnimation}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{
							duration: 0.4,
							ease: 'easeInOut',
							delay: reverseIndex(index) * 0.1,
						}}
						className='h-full w-full bg-white relative'
					/>
				)
			})}
		</>
	)
}

export default Stairs
