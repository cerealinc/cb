import React, { useRef, useContext } from 'react';
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";
import MotionPathPlugin from "gsap-trial/dist/MotionPathPlugin";
import ReactFullpage from "@fullpage/react-fullpage";

gsap.registerPlugin(MotionPathPlugin);
import {
  motion,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { useIsomorphicLayoutEffect } from '../helpers/isomorphicEffect';
import SmootherContext from '../context/SmootherContext';
// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};


function Home() {
  const { smootherReady } = useContext(SmootherContext);
  const main = useRef();
  const rx = 1
  const ry =  1
  const path = [
    // 1
    {  y: "40vh", x: "43vw" },
    {  y: "40vh", x: "43vw" },
    {  y: "40vh", x: "43vw" },
    // 2
    {  y: "40vh", x: "43vw" },
    { x: -90, y: 20 },
    { x: 10, y: 0 },
    // 3
    { x: -300, y: -300 },
    { x: -100, y: 0 },
    { x: 0, y: 0 },
    // 4
    { x: 1100, y: 300 },
    { x: 400, y: 400 },
    { x: 200, y: 250 },
    // 5
    { x: 100, y: 300 },
    { x: 500, y: 450 },
    { x: 1100, y: 500 }
  ]
  const path2 = [
    // 1
    { x: 800, y: 200 },
    { x: 900, y: 20 },
    { x: 1100, y: 100 },
    // 2
    { x: 700, y: 20 },
    { x: 1100, y: 20 },
    { x: 100, y: 800 },
    // 3
    { x: 100, y: 300 },
    { x: 500, y: 400 },
    { x: 1000, y: 200 },
    // 4
    { x: 1100, y: 300 },
    { x: 400, y: 400 },
    { x: 200, y: 250 },
    // 5
    { x: 100, y: 300 },
    { x: 500, y: 450 },
    { x: 1100, y: 500 }
  ]
const scaledPath = path.map(({ x, y }) => {
return {
x: x * rx,
y: y * ry
}
})
const scaledPath2 = path2.map(({ x, y }) => {
  return {
  x: x * rx,
  y: y * ry
  }
  })
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1.5,
        },
      })
      const tll = gsap.timeline({
        scrollTrigger: {
          scrub: 1.5,
        },
      })
      tl.to('.box-1', {
        motionPath: {
          path: scaledPath,
          align: 'self',
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 10,
        immediateRender: true,
        // ease: 'power4'
      })
      tll.to('.box-2', {
        motionPath: {
          path: scaledPath2,
          align: 'self',
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 10,
        immediateRender: true,
        // ease: 'power4'
      })

    }, main);

    return () => ctx.revert();
  });

  return (
    <>
      <main ref={main}>

      <div className="wrap">
      <img
            src="/Asset-1-3x.png"
            alt="Vercel Logo"
            className="asset-1 box-1"
            width={300}
            height={286}
          />
      <img
            src="/Asset-2-3x.png"
            alt="Vercel Logo"
            className="asset-2 box-2"
            width={300}
            height={286}
          />
      <img
            src="/Asset-3-3x.png"
            alt="Vercel Logo"
            className="asset-3 box-3"
            width={300}
            height={286}
          />

      </div>
      <div className="container container-2">

        </div>      <div className="container container-3">
        </div>

      </main>
    </>
  );
}

export default Home;
