
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
import * as contentful from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};

const myFont = localFont({ src: "../public/font/ABCFavoritVariable.woff2" });
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
            <meta name="description" content="We curate hospitality communications. Telling the stories that set the table for the world to gather." />
            <link href="/static/styles.css" rel="stylesheet" />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <motion.img
            src="/Asset-1-3x.png"
            alt="Vercel Logo"
            className="asset-1"
            initial={{ y: "79vh", x: "-49vw" }}
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
            style={{
              top: isInView ? "122vh" : "",
              left: isInView ? "-52vh" : "",

            }}
            priority
          />
          <motion.img
            src="/Asset-2-3x.png"
            alt="Vercel Logo"
            className="asset-2"
            initial={{ y: "9vh", x: "69vw" }}
            animate={{ y: 0, x: 0, rotate: [170, 0] }}
            exit={{}}
            transition={{
              delay: 0.4,
              easing, duration: 4.2,}}

            width={300}
            height={322}
            style={{
              top: isInView ? "122vh" : "",
              left: isInView ? "115vw" : "",

            }}
            priority
          />
          <motion.img
            src="/Asset-3-3x.png"
            alt="Vercel Logo"
            className="asset-3"
            initial={{ y: "-59vh", x: "-38vw" }}
            animate={{ y: 0, x: 0, rotate: [360, 0] }}
            exit={{}}
            transition={{
              delay: 0.6,
              easing, duration: 4,}}

            width={300}
            height={412}
            style={{
              top: isInView ? "122vh" : "",
              left: isInView ? "-65vw" : "",

            }}
            priority
          />
          <ReactFullpage
            navigation={false}
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
                      initial={{ y: "-29vh", x: "73vw" }}
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
                      className="section introText"
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
                  <div className="section section-pattern">
                    <div className="pattern">
                      <Image
                      src={`https:${props.imageBreakDesktop.fields.file.url}`}
                      alt="Carving Block"
                        className="desktop"
                        width={2000}
                        height={1235}
                        priority
                      />
                      <Image
                      src={`https:${props.imageBreakMobile.fields.file.url}`}
                      alt="Carving Block"
                        className="mobile"
                        width={600}
                        height={1057}
                        priority
                      />
                    </div>
                  </div>
                  <div  className="section curating">
                    <div
                    className="client-list-header"
                    >
                        {documentToReactComponents(props.clientListHeader)}

                    </div>
                    <Image
                      className="curating-image"
                      src={`https:${props.clientListImage.fields.file.url}`}
                      alt="Carving Block"
                      width={220}
                      height={220}
                      priority
                    />
 <div className="clients clients-desktop" style={{ fontWeight: 100 }}>
<div className={myFont.className}>
 <div className="col">
  {documentToReactComponents(props.clientList)}
</div>
</div>

                  
                    </div>

                    <div className="contact-section" style={{marginTop: '60px'}}>
                    <div
                                       ref={ref}
                    className="contact-header"
                    >
                        {documentToReactComponents(props.contactHeader)}

                    </div>

<div>
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
                  <div className="form-image">
                                      <Image
                                      className=""
                                      src="/C.png"
                                      alt="Thank You!"
                                      width={300}
                                      height={300}
                                    />
                                    <p className={myFont.className}>(WE'LL BE BREAKING BREAD SOON)</p>
                                    </div>

                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
            </form>
            </div>
                    <img
      style={{
        marginBottom: "100px",
        alignSelf: "center"
      }}
                      src="/CB_LOGO.png"
                      alt="Vercel Logo"
                      className=""
                      width={140}
                      height={82}
                      priority
                    />

                    <div className="footer"
                                
                            >
                              <div className="footer-container">
                    <Link href="mailto:info@carvingblockpr.com" className={myFont.className} style={{float: "left"}}>Contact</Link>
                    <Link href="https://www.instagram.com/carvingblock/" className={myFont.className} style={{float: "right"}}>Instagram</Link>
                    </div>
                    </div>
</div>
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
export async function getStaticProps() {
  // Get data from headless CMS
  const product = await client.getEntry('461MmpDfDdn1Yzwp05sj3l')

  return {
    props: {
      ...product.fields
    },
  }
}
