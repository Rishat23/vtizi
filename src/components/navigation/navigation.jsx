import { NavLink } from 'react-router-dom'

import cl from './navigation.module.scss'

const Navigation = () => {
	return (
		<ul className={cl.navigationList}>
			<li>
				<a href="#hero-screen"> Главная</a>
			</li>
			<li>
				<a href="#about"> О CTF</a>
			</li>
			<li>
				<a href="#teams"> Команды</a>
			</li>
		</ul>
	)
}

export default Navigation
