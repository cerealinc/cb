import gsap from "gsap-trial";
import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";

import { SmootherProvider } from '../context/SmootherContext';
import LayoutWrapper from '../components/layout-wrapper';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function MyApp({ Component, pageProps }) {
  return (
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
  );
}

export default MyApp;
