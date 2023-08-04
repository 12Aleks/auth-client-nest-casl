import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {HOME_ROUTE, LOGIN_ROUTE} from "./routing/paths";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {protectedAdminRoutes, protectedRouters} from "./routing/paths";

export function middleware(request: NextRequest){
    const currentUser = request.cookies.get("current_user") ;

    console.log('Current', currentUser)


    if(protectedRouters.includes(request.nextUrl.pathname) && (!currentUser || Date.now() > JSON.parse(currentUser.value).expiredAt)){
        return NextResponse.redirect(new URL(HOME_ROUTE , request.url))
    }

    if (currentUser && protectedAdminRoutes.includes(request.nextUrl.pathname) && !["admin", "editor"].includes(JSON.parse(currentUser?.value).role)) {
        return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url))
    }

}