import DashboardLayout from "@/components/Views/layouts/DashboardLayout";
import HelloWorld from "@/components/HelloWorld";

export default [
    {
        path: '/',
        component: DashboardLayout,
        redirect: '/hello/world',
        children: [
            {
                path: 'hello/world',
                name: 'HelloWorld',
                component: HelloWorld,
                meta: {title: 'My Plan List', requiresAuth: false}
            }
        ]
    }
];
