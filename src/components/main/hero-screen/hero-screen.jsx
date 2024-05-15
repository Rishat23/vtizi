import ButtonLink from '@ui/button/link'

import cl from './hero-screen.module.scss'

const HeroScreen = () => {
	return (
		<div id="hero-screen" className={cl.heroScreenWrapper}>
			<div className={cl.heroScreenContainer}>
				<h1 className={cl.titleContainer}>
					<span className={cl.title}>VTIZI CTF CLUB</span>
					<span className={cl.text}>Федерация спортивного программирования</span>
				</h1>
				<div className={cl.buttonContainer}>
					<ButtonLink className={cl.btn} sizeStyle="sizeL" href="/" colorStyle="secondary">
						Подробнее
					</ButtonLink>
					<a href="#about" className={cl.arrowDown} />
				</div>
			</div>
		</div>
	)
}

export default HeroScreen
