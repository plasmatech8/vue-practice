import VueRouter from "vue-router"

import GeneralLayout from './layouts/GeneralLayout'
import HomePage from './views/HomePage'
import EmployeesPage from './views/EmployeesPage'
import NotFoundPage from './views/NotFoundPage'

const routes = [
    {
        path: '/',
        component: GeneralLayout,
        children: [
            {
                name: 'Home',
                path: '/',
                component: HomePage,
            },
            {
                name: 'Employees',
                path: '/employees',
                component: EmployeesPage,
            },
            {
                name: 'NotFound',
                path: '/*',
                component: NotFoundPage
            }
        ]
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
