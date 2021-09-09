import DashboardLayout from "../components/Views/layouts/DashboardLayout";

import homeRoute from './Home'

const baseRoutes = [
    {
        path: '/',
        component: DashboardLayout,
        redirect: '/hello/world'
    },
];

const routes = baseRoutes.concat(
    homeRoute
);

export default routes;
