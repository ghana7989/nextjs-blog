/** @format */
import Image from 'next/image'
import classes from './Hero.module.css'

const Hero: () => JSX.Element = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='https://res.cloudinary.com/ghana7989/image/upload/v1617984795/hero_photo_mpjart.jpg'
					alt='An Image showing Pavan'
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I am Pavan</h1>
			<p>I blog about web development, mainly.I also blog about my personal life experiences.</p>
		</section>
	)
}

export default Hero
