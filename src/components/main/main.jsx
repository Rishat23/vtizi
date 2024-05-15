import Footer from '@components/footer'
import Header from '@components/header'
import Burger from '@components/header/burger'
import About from '@components/main/about'
import Application from '@components/main/application'
import HeroScreen from '@components/main/hero-screen'
import Teams from '@components/main/teams'
import Navigation from '@components/navigation/index.js'

const Main = () => {
	return (
		<>
			<Navigation />
			<Header />
			<HeroScreen />
			<About />
			<Teams />
			<Application />
			<Footer />
		</>
	)
}

export default Main
