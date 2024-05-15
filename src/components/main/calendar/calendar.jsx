import cn from 'classnames'

import cl from './calendar.module.scss'

const Calendar = () => {
	const calendarContentWrapperClassNames = cn([cl.calendarContentWrapper, 'container'])

	const itemList = Array(35).fill({ text: 'Жопа' })

	return (
		<div className={cl.calendarWrapper}>
			<div className={calendarContentWrapperClassNames}>
				<h2 className={cl.calendarWrapperTitle}>КАЛЕНДАРЬ СОБЫТИЙ</h2>
				<div className={cl.calendarInformationWrapper}>
					<div className={cl.btnWrapper}>
						<div className={cl.arrowLeft} />
						<span className={cl.btnWrapperTitle}>Декабрь 2023</span>
						<div className={cl.arrowRight} />
					</div>
					<div className={cl.calendarItemContainer}>
						{itemList.map(({ text }, index) => (
							<div key={index} className={cl.calendarItemWrapper}>
								{text}
							</div>
						))}
					</div>
				</div>
				<span className={cl.calendarFooter}>
					Мероприятия, отображаемые в часовом поясе: Среднее время по Гринвичу - Абиджан
				</span>
			</div>
		</div>
	)
}

export default Calendar
