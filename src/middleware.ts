import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {HOME_ROUTE, LOGIN_ROUTE} from "./routing/paths";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {protectedAdminRoutes, protectedRouters} from "./routing/paths";

export function middleware(request: NextRequest){
    const currentUser = request.cookies.get("current_user") ;

    if(protectedAdminRoutes.includes(request.nextUrl.pathname) && !currentUser ){
        return NextResponse.redirect(new URL(HOME_ROUTE , request.url))
    }

    if (protectedAdminRoutes.includes(request.nextUrl.pathname) && currentUser && !["admin", "editor"].includes(JSON.parse(currentUser?.value).role)) {
        return NextResponse.redirect(new URL(HOME_ROUTE, request.url))
    }

}