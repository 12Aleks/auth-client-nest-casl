import type {NextRequest} from "next/server";
import type {NextResponse} from "next/server";
import {HOME_ROUTE, LOGIN_ROUTE} from "./routing/paths";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

export function middleware(request: NextRequest){
    const currentUser:RequestCookie|undefined = request.cookies.get("currentUser")
    console.log(currentUser)
}