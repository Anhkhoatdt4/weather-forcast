import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import WeatherPage from '~/pages/WeatherPage/WeatherPage'
import HomePage from './pages/HomePage'

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
            }
        ]
    }
])

export default routes
