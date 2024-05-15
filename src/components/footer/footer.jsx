import cn from 'classnames'

import cl from './footer.module.scss'

const Footer = () => {
	const footerContentWrapperClassNames = cn([cl.footerContentWrapper, 'container'])

	return (
		<div className={cl.footer}>
			<div className={footerContentWrapperClassNames}>
				<div className={cl.navigationWrapper}>
					<div className={cl.menuContainerWrapper}>
						<h4 className={cl.heading}>/Меню</h4>
						<div className={cl.menuContainer}>
							<a href="#hero-screen">Главная</a>
							<a href="#about">О CTF</a>
							<a href="#teams">Команды</a>
							<a href="/">Блог</a>
						</div>
					</div>
					<div className={cl.contactsContainerWrapper}>
						<h4 className={cl.heading}>/Контакты</h4>
						<div className={cl.contactsContainer}>
							<a className={cl.telegram} href="/">
								@lizardpalace
							</a>
							<a className={cl.mail} href="/">
								vtizictfclub@proton.me
							</a>
						</div>
					</div>
				</div>
				<div className={cl.privacyPolicy}>
					<a href="/shop">Магазин</a>
					<a href="/privacy-policy">Политика конфеденциальности</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
