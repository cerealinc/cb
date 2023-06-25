import React, { useRef } from "react";
import Image from 'next/image'
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head'
import { motion, AnimatePresence, useInView, useScroll, useTransform  } from "framer-motion"
import localFont from '@next/font/local'

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};

const myFont = localFont({ src: '../public/font/ABCFavoritVariable.woff2' })
const OldTimesAmerican = localFont({ src: '../public/font/OldTimesAmerican-Italic.ttf' })
const TimesNow = localFont({ src: '../public/font/TimesNow-ExtraLight.otf' })




export default function Connect(props) {



  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isInView = useInView(ref, {
    amount: 1
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    return (
      <>
      <AnimatePresence mode='wait' initial={true}>

      <div ref={ref} className="App">
        <Head>
          <title>CARVINGBLOCK</title>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <motion.img
                style={{ y: textY }}
              src="/Asset-1-3x.png"
              alt="Vercel Logo"
              className="asset-1"
              initial={{ y: "79vh", x: "-43vw" }}
              animate={{ y: 0, x: 0, rotate: [0, 180, 360, 270, 0]}}
              exit={{}}
              transition={{
                delay: .8,
                ease: "linear",
                duration: 6
              }}              
              width={300}
              height={286}
              priority
            />
            <motion.img
              src="/Asset-2-3x.png"
              alt="Vercel Logo"
              className="asset-2"
              initial={{ y: "9vh", x: "63vw" }}
              animate={{ y: 0, x: 0, rotate: [170, 0]}}
              exit={{}}
              transition={{
                delay: 1,
                ease: "easeIn",
                duration: 5.2
              }}           
              width={300}
              height={322}
              priority
            />
              <motion.img
              src="/Asset-3-3x.png"
              alt="Vercel Logo"
              className="asset-3"
              initial={{ y: "-59vh", x: "-33vw" }}
              animate={{ y: 0, x: 0, rotate: [360, 0]}}
              exit={{}}
              transition={{
                delay: 1.2,
                ease: "easeIn",
                duration: 5
              }}               
              width={300}
              height={412}
              priority
            />
        <ReactFullpage
          navigation
          scrollingSpeed={1200}
          pluginWrapper={pluginWrapper}
          render={comp =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>

                  <div style={{overflow: "hidden"}}  ref={ref} className="section">

                  <motion.img
              src="/Asset-4-3x.png"
              alt="Vercel Logo"
              className="asset-4"
              initial={{ y: "-29vh", x: "63vw" }}
              animate={{ y: 0, x: 0, rotate: [360, 0]}}
              exit={{}}
              transition={{
                delay: 1,
                ease: "easeIn",
                duration: 5
              }}                     
              width={400}
              height={424}
              priority
            />

                  <motion.img
              src="/LOGOTYPE.png"
              alt="Vercel Logo"
              className="LOGOTYPE"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 6,
                ease: "easeIn",
                duration: 1
              }}             
              width={800}
              height={235}
              priority
            />

                  </div>
                  <div ref={ref} style={{zIndex: isInView ? 1 : 5}} className="section">
                    <h1 className={TimesNow.className}>Telling<br/>
the stories<br/>
that                   <Image
              src="/B.png"
              alt="Vercel Logo"
              className="telling"
              width={140}
              height={140}
              priority
            /> set<br/>
the table<br/>
for the world<br/>
to gather.</h1>
                  </div>
                  <div className="section">
                  <div className="pattern">

                  <Image
              src="/PATTERN-desktop.png"
              alt="Vercel Logo"
              className="desktop"
              width={2000}
              height={1235}
              priority
            />
                              <Image
              src="/PATTERN-mobile.png"
              alt="Vercel Logo"
              className="mobile"
              width={600}
              height={1057}
              priority
            />
                              </div>

                  </div>
                  <div ref={ref} className="section curating">
                    <motion.h2
        style={{ y: textY }} className={isInView ? "fuck" : "nope"} >
                    <span style={{fontWeight: 400}} className={myFont.className}>CURATING </span><span style={{fontWeight: 100}} className={TimesNow.className}>Communications<br/>
for The Hospitality Space</span></motion.h2>
<Image
              src="/A.png"
              alt="Vercel Logo"
              className=""
              width={220}
              height={220}
              priority
            /> 

<div className="clients" style={{fontWeight: 100}}>
  <ul className={myFont.className}>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  </ul>
  <ul className={myFont.className}>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  </ul>
  <ul className={myFont.className}>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  </ul>
  <ul className={myFont.className}>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  <li>CLIENT NAME</li>
  </ul>
</div>

      <motion.h2 style={{ y: textY }} className={isInView ? "fuck" : "nope"} >
                    <span style={{fontWeight: 400}} className={myFont.className}>CARVE </span><span style={{fontWeight: 100}} className={TimesNow.className}>Out Your Future With Us</span>
                    </motion.h2>
                  </div>
              </ReactFullpage.Wrapper>
              
            )
          }
        />
      </div>
      </AnimatePresence> </>

    );

  }

