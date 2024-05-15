import cn from 'classnames'
import { useState } from 'react'

import Button from '@ui/button/index.js'

import SignUpModal from '@components/modals/sign-up-modal'

import cl from './application.module.scss'

const Application = () => {
	const applicationContentWrapperClassNames = cn([cl.applicationContentWrapper, 'container'])

	const [isOpen, setIsOpen] = useState(false)

	const togglePanelHandler = () => {
		setIsOpen(!isOpen)
	}
	const closePanelHandler = () => {
		setIsOpen(false)
	}

	return (
		<div className={cl.applicationContainer}>
			<div className={applicationContentWrapperClassNames}>
				<div className={cl.textContainer}>
					<h4 className={cl.title}>Хотите задать вопрос команде?</h4>
					<div className={cl.text}>
						<span>Оставьте ваши контактные данные</span>
						<span>и мы свяжемся с вами!</span>
					</div>
				</div>
				<Button className={cl.button} colorStyle="secondary" sizeStyle="sizeL" onClick={togglePanelHandler}>
					Оставить заявку
				</Button>
				{isOpen ? <SignUpModal onClose={closePanelHandler} /> : null}
			</div>
		</div>
	)
}

export default Application
