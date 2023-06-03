import type {AppProps} from 'next/app';
import {wrapper} from "../store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss'

export function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);