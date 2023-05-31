import type {AppProps} from 'next/app';
import {wrapper} from "../store/store";

export function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);