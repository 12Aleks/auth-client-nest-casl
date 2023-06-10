import type {AppProps} from 'next/app';
import {wrapper} from "../store/store";
import { Provider } from "react-redux";
import {FC} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss'

// export function MyApp({Component, pageProps}: AppProps) {
//     return <Component {...pageProps} />
// }
//
// export default wrapper.withRedux(MyApp);

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