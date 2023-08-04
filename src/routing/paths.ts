export const LOGIN_ROUTE = '/auth';
export const ARTICLES_ROUTE = '/articles';
export const HOME_ROUTE = '/';
export const ADMIN_ROUTE = '/admin';

export const usersRout = [
    {
        path: HOME_ROUTE,
        component: 'World news'
    },
    {
        path: ARTICLES_ROUTE,
        component: 'Local news'
    }
]

export const adminRout = [
    {
        path: ADMIN_ROUTE,
        component: 'Admin'
    }
]

export const protectedRouters = [HOME_ROUTE, ADMIN_ROUTE, ARTICLES_ROUTE]
export const protectedAdminRoutes = [ADMIN_ROUTE]

