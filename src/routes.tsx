import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import WeatherPage from '~/pages/WeatherPage/WeatherPage'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import CitiesPage from './pages/CitiesPage'
import SettingsPage from './pages/SettingsPage'
import { Globe } from 'lucide-react'
import GlobeHomePage from './pages/CesiumHomePage'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/weather',
                element: <WeatherPage />,
            },
            {
                path: '/explore',
                element: <ExplorePage />,
            },
            {
                path: '/cities',
                element: <CitiesPage />,
            },
            {
                path: '/settings',
                element: <SettingsPage />,
            },
            {
                path: '/earth',
                element: <GlobeHomePage />,
            }
        ]
    }
])

export default routes
