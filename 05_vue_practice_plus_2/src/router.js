import VueRouter from "vue-router"

import GeneralLayout from './layouts/GeneralLayout'
import HomePage from './views/HomePage'
import EmployeesPage from './views/EmployeesPage'
import TodosPage from './views/TodosPage'
import SettingsPage from './views/SettingsPage'
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
                name: 'Todos',
                path: '/todos',
                component: TodosPage,
            },
            {
                name: 'Settings',
                path: '/settings',
                component: SettingsPage,
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
