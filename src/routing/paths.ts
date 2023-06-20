export const LOGIN_ROUTE = '/';
export const ARTICLES_ROUTE = '/articles';
export const HOME_ROUTE = '/home';
export const ADMIN_ROUTE = '/admin';

export const usersRout = [
    {
        path: HOME_ROUTE,
        component: 'Home'
    },
    {
        path: ARTICLES_ROUTE,
        component: 'Articles'
    }
]

export const adminRout = [
    {
        path: ADMIN_ROUTE,
        component: 'Admin'
    }
]