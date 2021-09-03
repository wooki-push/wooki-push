import type { AppProps , AppContext } from 'next/app'
import GlobalStyle from "../styles/GlobalStyles";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await Coin.getInitialProps(appContext);

//   return { ...appProps }
// }
export default MyApp;
