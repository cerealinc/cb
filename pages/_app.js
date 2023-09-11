import LayoutWrapper from '../components/layout-wrapper';

function MyApp({ Component, pageProps }) {
  return (
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
  );
}

export default MyApp;
