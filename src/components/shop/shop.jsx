import ButtonLink from '@ui/button/link'

import cl from './shop.module.scss'

const Shop = () => {
	return (
		<div className={cl.shopWrapper}>
			<div className={cl.shopContainer}>
				<h2 className={cl.title}>Страница магазина находится в разработке</h2>
				<span className={cl.loader} />
				<ButtonLink className={cl.button} sizeStyle="sizeL" colorStyle="secondary" href="/">
					На Главную
				</ButtonLink>
			</div>
		</div>
	)
}

export default Shop
