import useDisableScroll from '@hooks/use-disable-scroll.js'

import cl from './burger.module.scss'

const Burger = ({ onClose }) => {
	useDisableScroll()

	return (
		<>
			<div className={cl.burgerWrapper}>
				<button className={cl.btnClose} onClick={onClose} />
				<ul className={cl.burgerNavigation}>
					<li>
						<a href="/" onClick={onClose}>
							Главная
						</a>
					</li>
					<li>
						<a href="#about" onClick={onClose}>
							O CTF
						</a>
					</li>
					<li>
						<a href="#teams" onClick={onClose}>
							Команды
						</a>
					</li>
				</ul>
				<ul className={cl.burgerContacts}>
					<li>
						<a className={cl.telegram} href="/">
							@lizardpalace
						</a>
					</li>
					<li>
						<a className={cl.mail} href="/">
							vtizictfclub@proton.me
						</a>
					</li>
				</ul>
			</div>
			<div className={cl.overlay} onClick={onClose} />
		</>
	)
}

export default Burger
