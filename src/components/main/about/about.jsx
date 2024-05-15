import cn from 'classnames'

import cl from './about.module.scss'

const About = () => {
	const aboutContentWrapperClassNames = cn([cl.aboutContentWrapper, 'container'])

	return (
		<div id="about" className={cl.aboutWrapper}>
			<div className={aboutContentWrapperClassNames}>
				<h2 className={cl.aboutWrapperTitle}>О CTF </h2>
				<div className={cl.aboutInformationWrapper}>
					<span className={cl.aboutInformationWrapperTitle}>CTF (Capture The Flag)</span>
					<p className={cl.aboutInformationWrapperText}>
						{' '}
						– это форма соревнования в области информационной безопасности, где участники решают различные задачи с
						целью поиска "флагов" (обычно текстовых строк или файлов), спрятанных в системе или приложении. <br />
						CTF--соревнования позволяют участникам развивать свои навыки в области кибербезопасности, криптографии,
						взлома, программирования и других смежных областей.
					</p>
				</div>
				<div className={cl.kindsCTFWrapper}>
					<p className={cl.kindsCTFWrapperText}>
						Виды CTF--соревнований могут значительно различаться, предлагая участникам разнообразные задачи и сценарии.
						Некоторые общие виды CTF-соревнований включают:
					</p>
				</div>
				<ul className={cl.kindsCTFList}>
					<li className={cl.kindsCTFListItem}>
						<p className={cl.kindsCTFListItemText}>
							Jeopardy (Джепарди): Этот формат CTF представляет собой набор задач разного уровня сложности,
							организованных по категориям. Участники решают задачи и получают флаги, зарабатывая баллы.
						</p>
					</li>
					<li className={cl.kindsCTFListItem}>
						<p className={cl.kindsCTFListItemText}>
							Attack-Defense (Атака-Защита): В этом формате команды получают одинаковый набор ресурсов и соревнуются в
							одновременном взломе ресурсов друг друга. Успешная атака приносит команде очки, а успешная защита
							предотвращает потерю очков.
						</p>
					</li>
					<li className={cl.kindsCTFListItem}>
						<p className={cl.kindsCTFListItemText}>
							Mixed (Смешанный формат): Соревнования могут также объединять элементы различных форматов, создавая
							разнообразные задачи и сценарии
						</p>
					</li>
				</ul>
				<div className={cl.aboutFooterWrapper}>
					<p className={cl.aboutFooterWrapperText}>
						Часто CTF-соревнования организовываются сообществами, университетами, компаниями или конференциями по
						информационной безопасности целью стимулирования обучения и развития навыков в области кибербезопасности.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About
