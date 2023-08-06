import type {AppProps} from 'next/app';
import {wrapper} from "../store/store";
import { Provider } from "react-redux";
import {FC} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles.scss'


const MyApp: FC<AppProps> = ({Component, ...rest}) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <Provider store={store}>
                <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;