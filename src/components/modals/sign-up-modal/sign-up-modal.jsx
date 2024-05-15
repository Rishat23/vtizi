import useDisableScroll from '@hooks/use-disable-scroll.js'
import { useState } from 'react'

import getRawPhoneFromParsedPhone from '@helpers/getRawPhoneFromParsedPhone.js'
import parseRawPhone from '@helpers/parseRawPhone.js'

import Button from '@ui/button/index.js'

import cl from './sign-up-modal.module.scss'

const SignUpModal = ({ onClose }) => {
	useDisableScroll()

	const [isOk, setIsOk] = useState('default')
	const [isDisabled, setIsDisabled] = useState(false)
	const [viewPhone, setViewPhone] = useState('')
	const [phone, setPhone] = useState('')

	const submitForm = (e) => {
		e.preventDefault()

		setIsDisabled(true)

		const fd = new FormData(e.target)

		const fdPhone = fd.get('phone')

		if (fdPhone.slice(0, 1) === '8') {
			fd.set('phone', `+7${fdPhone.slice(1)}`)
		}

		if (
			fd
				.get('phone')
				.split(/[-_()^\s*$]+/)
				.join('').length === 12
		) {
			fetch('', { method: 'post', body: fd })
				// https://kspback.ambity.ru/api/handler_request
				.then((resp) => resp.json())
				.then((res) => {
					if (res.status === 'ok') {
						setIsOk('successfully')
					} else {
						setIsOk('error')
					}
				})
				.finally(() => {
					setIsDisabled(false)
				})
		} else {
			setIsDisabled(false)
			alert('Заполните номер телефона')
		}
	}

	const changePhoneHandler = (event) => {
		const rawPhone = getRawPhoneFromParsedPhone(event.target.value, viewPhone)
		const newViewPhone = parseRawPhone(rawPhone)

		setViewPhone(newViewPhone)
		setPhone(rawPhone)
	}
	return (
		<>
			<div className={cl.overlay} onClick={onClose} />
			{isOk === 'successfully' ? (
				<div className={cl.secondarySignUpWrapper}>
					<div className={cl.successfullyWrapper}>
						<h2 className={cl.successfullyTitle}>Заявка успешно отправлена!</h2>
						<span className={cl.successfullyText}>Мы свяжемся с вами в ближайшее время</span>
					</div>
				</div>
			) : isOk === 'default' ? (
				<div className={cl.signUpWrapper}>
					<div className={cl.signUpContainer}>
						<h2 className={cl.title}>Введите ваши данные</h2>
						<div className={cl.signUpContentWrapper}>
							<div className={cl.signUpContent}>
								<div className={cl.mailWrapper}>
									<span className={cl.text}>Email адрес:</span>
									<input className={cl.input} type="" />
								</div>
								<div className={cl.informationWrapper}>
									<div className={cl.inputWrapper}>
										<span className={cl.text}>Номер телефона:</span>
										<input
											className={cl.input}
											onChange={changePhoneHandler}
											value={viewPhone}
											type="text"
											size="16"
											placeholder="+7 (_ _ _)"
											required
											disabled={isDisabled}
										/>
										<input name="phone" type="hidden" tabIndex={-1} readOnly value={phone} />
									</div>
									<div className={cl.inputWrapper}>
										<span className={cl.text}>Ваше имя:</span>
										<input className={cl.input} type="" />
									</div>
								</div>
							</div>
							<div className={cl.buttonWrapper}>
								<Button className={cl.button} colorStyle="outlined" sizeStyle="sizeS" onClick={onClose}>
									Отмена
								</Button>
								<Button className={cl.btn} colorStyle="primary">
									Отправить
								</Button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className={cl.secondarySignUpWrapper}>
					<div className={cl.successfullyWrapper}>
						<h2 className={cl.successfullyTitle}>Произошла ошибка, попробуйте снова позже.</h2>
					</div>
				</div>
			)}
		</>
	)
}

export default SignUpModal
