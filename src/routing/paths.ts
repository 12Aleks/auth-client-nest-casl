export const LOGIN_ROUTE = '/';
export const ARTICLES_ROUTE = '/articles';
export const HOME_ROUTE = '/home';


export const availableRout = [
    {
        path: LOGIN_ROUTE,
        component: 'Login'
    }
]
export const authRout = [
    {
        path: HOME_ROUTE,
        component: 'Home'
    },
    {
        path: ARTICLES_ROUTE,
        component: 'Articles'
    }
]