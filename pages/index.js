import React, { useState, useRef } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
  cubicBezier,
  useTransform,
} from "framer-motion";
import localFont from "@next/font/local";
import Link from "next/link";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const myFont = localFont({ src: "../public/font/ABCFavoritVariable.woff2" });
const OldTimesAmerican = localFont({
  src: "../public/font/OldTimesAmerican-Italic.ttf",
});
const TimesNow = localFont({ src: "../public/font/TimesNow-ExtraLight.otf" });

export default function Connect(props) {
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("SUBMIT");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          lastname: lastname,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setLastname("");
        setEmail("");
        setMessage("");
        setPhone("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setLastname("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
    console.log(fullname, lastname, email, phone, message);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const easing = cubicBezier(0.250, 0.250, 0.000, 1.045)

  return (
    <>
      <AnimatePresence mode="wait" initial={true}>
        <div className="App">
          <Head>
            <title>CARVINGBLOCK</title>
            <link href="/static/styles.css" rel="stylesheet" />
          </Head>
          <motion.img
            src="/Asset-1-3x.png"
            alt="Vercel Logo"
            className="asset-1"
            initial={{ y: "79vh", x: "-43vw" }}
            animate={{ y: 0, x: 0, rotate: [0, -360] }}
            exit={{}}
            onAnimationComplete={(definition) => {
              document.body.classList.add("loaded");
              console.log("Completed animating", definition);
            }}
            transition={{
              delay: 0.4,
              easing, duration: 4.2,}}

            width={300}
            height={286}
            priority
          />
          <motion.img
            src="/Asset-2-3x.png"
            alt="Vercel Logo"
            className="asset-2"
            initial={{ y: "9vh", x: "63vw" }}
            animate={{ y: 0, x: 0, rotate: [170, 0] }}
            exit={{}}
            transition={{
              delay: 0.4,
              easing, duration: 4.2,}}

            width={300}
            height={322}
            priority
          />
          <motion.img
            src="/Asset-3-3x.png"
            alt="Vercel Logo"
            className="asset-3"
            initial={{ y: "-59vh", x: "-33vw" }}
            animate={{ y: 0, x: 0, rotate: [360, 0] }}
            exit={{}}
            transition={{
              delay: 0.6,
              easing, duration: 4,}}

            width={300}
            height={412}
            priority
          />
          <ReactFullpage
            navigation={false}
            continuousVertical={true}
            scrollingSpeed={1200}
            pluginWrapper={pluginWrapper}
            render={(comp) =>
              console.log("render prop change") || (
                <ReactFullpage.Wrapper>
                  <motion.div
                  ref={ref}
                    style={{ overflow: "hidden" }}
                    className="section"
                  >
                    <motion.img

                      src="/Asset-4-3x.png"
                      alt="Vercel Logo"
                      className="asset-4"
                      initial={{ y: "-29vh", x: "63vw" }}
                      animate={{ y: 0, x: 0, rotate: [360, 0] }}
                      exit={{}}
                      transition={{
                        delay: 0.2,
                        easing, duration: 4.3,}}
          
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
                        delay: 4,
                        ease: "easeIn",
                        duration: 1,
                      }}
                      width={800}
                      height={235}
                      priority
                    />
                  </motion.div>
                  <div
                      className="section"
                  >
                    <h1 className={TimesNow.className}>
                      Telling
                      <br />
                      the stories
                      <br />
                      that{" "}
                      <Image
                        src="/B.png"
                        alt="Vercel Logo"
                        className="telling"
                        width={140}
                        height={140}
                        priority
                      />{" "}
                      set
                      <br />
                      the table
                      <br />
                      for the world
                      <br />
                      to gather.
                    </h1>
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
                  <div  className="section curating">
                    <motion.h2
                    >
                      <span
                        style={{ fontWeight: 400 }}
                        className={myFont.className}
                      >
                        CURATING{" "}
                      </span>
                      <span
                        style={{ fontWeight: 100 }}
                        className={TimesNow.className}
                      >
                        Communications
                        <br />
                        for The Hospitality Space
                      </span>
                    </motion.h2>
                    <Image
                      className="curating-image"
                      src="/A.png"
                      alt="Vercel Logo"
                      width={220}
                      height={220}
                      priority
                    />
 <div className="clients clients-desktop" style={{ fontWeight: 100 }}>
                      <ul className={myFont.className}>

                          <li>Amazon Studios</li>
                          <li>Diageo</li>
                          <li>Flamingo Estate</li>
                          <li>Coachella</li>
                          <li>Los Angeles Times</li>
                          <li>The Coca Cola Company</li>
                          <li>Family Style Food Festival</li>
                          <li>The Big Global Company</li>
                          <li>Hulu</li>
                        <li>FX</li>  
                        <li>Grand Central Market</li>

                      </ul>
                      <ul className={myFont.className}>
                        <li>Broad Street Oyster Co.</li>
                        <li>Caruso</li>
                        <li>Caviar Kaspia</li>
                        <li>Ginza Nishikawa</li>
                        <li>Dorsia</li>
                        <li>CINESPIA</li>
                           <li>Best Bet</li>
                           <li>Yangban</li>
                           <li>NVE</li>
                           <li>The Line Hotel</li>
                           <li>Client placeholder</li>

                      </ul>

                      <ul className={myFont.className}>
                           <li>Grupo Hunan</li>
                           <li>sbe</li>
                           <li>Ace Hotel</li>
                                <li>Boka Group</li>
                                <li>Best Buddy Hospitality</li>
                                <li>Big Noise Beer</li>
                                <li>Aldar</li>
                                <li>Tacos 1986</li>
                                <li>Yeastie Boy Bagels</li>
                                <li>Ggiata</li>
                                <li>TenderFest</li>
                      </ul>
                    </div>
                    <div className="clients clients-mobile" style={{ fontWeight: 100 }}>
                      <p className={myFont.className}>

                        Amazon Studios, 
                        Diageo, 
                      Flamingo Estate, 
                        Coachella, 
                        Los Angeles Times, 
                        The Coca Cola Company, 
                        Family Style Food Festival, 
                        The Big Global Company, 
                        Hulu, 
                        FX, 
                        Grand Central Market, 
                        Broad Street Oyster Co., 
                        Caruso, 
                        Caviar Kaspia, 
                        Ginza Nishikawa, 
                        Dorsia, 
                        CINESPIA, 
                        Best Bet, 
                        Yangban, 
                        NVE, 
                        The Line Hotel, 
                        Grupo Hunan, 
                        sbe, 
                        Ace Hotel, 
                        Boka Group, 
                        Best Buddy Hospitality, 
                        Big Noise Beer, 
                        Aldar, 
                        Tacos 1986,
                        Yeastie Boy Bagels,
                        Ggiata,
                        TenderFest
                        </p>
                    </div>
                    </div>
                    <div className="section">

                  <motion.h2
 ref={ref}
      style={{
        transform: isInView ? "none" : "translatey(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
                    >
                      <span
                        style={{ fontWeight: 400 }}
                        className={myFont.className}
                      >
                        CARVE{" "}
                      </span>
                      <span
                        style={{ fontWeight: 100 }}
                        className={TimesNow.className}
                      >
                        Out Your Future With Us
                      </span>
                    </motion.h2>



<form className='form' onSubmit={handleSubmit}>
            
<input type="email" name="email" value={email} className="email-address" placeholder="YOUR EMAIL HERE"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors?.email && (
                <p className="text-red-500">Email cannot be empty.</p>
              )}

             
                <button
                  type="submit"
                  style={{display: "none"}}
                >
                  {buttonText}

                </button>
                {showSuccessMessage && (
                                      <Image
                                      className="form-image"
                                      src="/C.png"
                                      alt="Thank You!"
                                      width={300}
                                      height={300}
                                    />
                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
            </form>

                    <motion.img
                     ref={ref}
      style={{
        transform: isInView ? "none" : "translatey(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        marginBottom: "100px"
      }}
                      src="/CB_LOGO.png"
                      alt="Vercel Logo"
                      className=""
                      width={140}
                      height={82}
                      priority
                    />

                    <motion.div className="footer" ref={ref}
       style={{
        transform: isInView ? "translatey(0px)" : "translatey(80px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
      }}
                                
                            >
                              <div className="footer-container">
                    <Link href="Contact" className={myFont.className} style={{float: "left"}}>Contact</Link>
                    <Link href="https://www.instagram.com/carvingblockpr/" className={myFont.className} style={{float: "right"}}>Instagram</Link>
                    </div>
                    </motion.div>
</div>
      </ReactFullpage.Wrapper>
      )
            }
          />
    </div >
      </AnimatePresence > { " "}
    </>
  );
}
