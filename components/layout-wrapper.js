import { useContext } from 'react';
import gsap from "gsap-trial";
import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from '../helpers/isomorphicEffect';
import SmootherContext from '../context/SmootherContext';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const LayoutWrapper = ({ children, ...props }) => {
  const { toggleSmootherReady } = useContext(SmootherContext);



  return (
    <div id="smooth-wrapper" {...props}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
