import MainPage from '@pages/main-page'
import PrivacyPolicyPage from '@pages/privacy-policy-page/index.js'
import ShopPage from '@pages/shop-page/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function Routes() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />
		},
		{
			path: `/privacy-policy`,
			element: <PrivacyPolicyPage />
		},
		{
			path: '/shop',
			element: <ShopPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
