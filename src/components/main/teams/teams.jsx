import useMatchMedia from '@hooks/use-match-media.js'
import cn from 'classnames'
import { useMemo } from 'react'

import cl from './teams.module.scss'

const Teams = () => {
	const teamsContentWrapperClassNames = cn([cl.teamsContentWrapper, 'container'])
	const { isTablet, isDesktop } = useMatchMedia()

	const slidesPerView = useMemo(() => {}, [])

	return (
		<div id="teams" className={cl.teamsWrapper}>
			<div className={teamsContentWrapperClassNames}>
				<h2 className={cl.teamsWrapperTitle}>ДЕЙСТВУЮЩИЕ КОМАНДЫ</h2>
				<div className={cl.teamsInformationWrapper}>
					<p className={cl.teamsInformationWrapperText}>
						Кафедру Вычислительной техники и защиты информации на соревнованиях CTF представляют следующие команды:
					</p>
					<p className={cl.teamsInformationWrapperText}>sample text, **error 404, _texterror_, ранее rm -- fr</p>
				</div>
				<span className={cl.teamsInformationTitle}>Предыдущие CTF--соревнования</span>
				<div className={cl.teamsContainer}>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>ПГУТИ Олимпиада по ИБ 2021</span>
						<p className={cl.teamsContainerItemText}>Индивидуальное участие</p>
						<p className={cl.teamsContainerItemText}>Призер -- студент УГАТУ(УУНИТ).</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>ПГУТИ Олимпиада по ИБ 2021</span>
						<p className={cl.teamsContainerItemText}>Индивидуальное участие</p>
						<p className={cl.teamsContainerItemText}>Призер -- студент УГАТУ(УУНИТ).</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
					<div className={cl.teamsContainerItem}>
						<span className={cl.teamsContainerItemTitle}>Киберсабантуй 2021</span>
						<p className={cl.teamsContainerItemText}>Команда: rm -rf/</p>
						<p className={cl.teamsContainerItemText}>7 место</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Teams
