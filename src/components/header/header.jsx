import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { useCallback, useState } from 'react'

import ButtonLink from '@ui/button/link/index.js'

import Burger from '@components/header/burger/index.js'

import cl from './header.module.scss'

const Header = () => {
	const [burgerIsOpen, setBurgerIsOpen] = useState(false)
	const headerContentWrapperClassNames = cn([cl.headerContentWrapper, 'container'])
	const { isMobile } = useMatchMedia()

	const toggleBurgerIsOpenHandler = useCallback(() => setBurgerIsOpen((prev) => !prev), [])

	return (
		<>
			<div className={cl.header}>
				<div className={headerContentWrapperClassNames}>
					{isMobile && <button className={cl.burger} onClick={toggleBurgerIsOpenHandler} />}
					<div className={cl.btnWrapper}>
						<ButtonLink className={cl.btn} sizeStyle="sizeM" href="/" colorStyle="primary">
							Блог
						</ButtonLink>
						<ButtonLink className={cl.btn} sizeStyle="sizeM" href="/shop" colorStyle="secondary">
							Магазин
						</ButtonLink>
					</div>
				</div>
			</div>
			{burgerIsOpen && <Burger onClose={toggleBurgerIsOpenHandler} />}
		</>
	)
}

export default Header
