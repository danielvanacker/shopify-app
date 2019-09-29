import App from 'next/app';
import Head from 'next/head';

// Passes down the props and context needed to use the polaris lib.
// App needs to be wrapped in it to use Polaris.
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </React.Fragment>
         );
    }
}

export default MyApp;