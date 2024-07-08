import { useEffect, useRef, useState } from "react";
import { Bio } from "./Sections/Bio";
import { Contact } from "./Sections/Contact";
import { Mediation } from "./Sections/Mediation";
import { useIsVisible } from "./UseIsVisible";
import "./index.css";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";

function App() {
  const ref1 = useRef(null);
  const isVisibleLanding = useIsVisible(ref1);

  const ref2 = useRef(null);
  const isVisibleMediation = useIsVisible(ref2);

  const ref3 = useRef(null);
  const isVisibleBio = useIsVisible(ref3);

  const ref5 = useRef(null);
  const isVisibleContact = useIsVisible(ref5);

  const ref6 = useRef(null);
  const [logoIsFixed, setLogoIsFixed] = useState(false);

  const ref7 = useRef(null);
  const [navIsFixed, setNavIsFixed] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > ref6.current.clientHeight - 100000) {
        setLogoIsFixed(true);
      } else {
        setLogoIsFixed(false);
      }
      if (window.scrollY > ref7.current.clientHeight - 100000) {
        setNavIsFixed(true);
      } else {
        setNavIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-background-white">
        <div className="px-16">
          <div ref={ref1} id="home">
            <div className="flex h-screen items-center">
              <div className="basis-1/2">
                <div
                  className={` transition-all duration-700 ${
                    logoIsFixed
                      ? "fixed top-0 right-0 left-0 z-10 bg-background-white"
                      : "static"
                  }`}
                >
                  <img
                    src="/GiamelaMediationLogo.png"
                    ref={ref6}
                    onClick={() => window.location.replace("/")}
                    className={` mb-4 m-auto transition-all duration-700 hover:cursor-pointer ${
                      logoIsFixed ? "w-1/6 mt-4" : "w-1/2"
                    }`}
                  />
                </div>
                <p
                  className={`font-cairo font-extralight text-base w-5/6 mb-14 m-auto text-justify leading-10 transition-opacity ease-in duration-[1500ms] ${
                    isVisibleLanding ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Giamela Mediation was started in 2023 as a means to both give
                  back to the legal community and to assist colleagues more
                  expeditiously resolve disputes prior to the expenditure of
                  unnecessary time and resources in litigation. The
                  super-majority of cases can and should settle prior to trial
                  and mediation allows the opportunity to control their future
                  prior to putting it in the hands of a judge, arbitrator or
                  jury. Using more than two decades as an employment law
                  practitioner, and recent experience as a panelist for both
                  Resolve LA and the Central District’s ADR panel, I seek to
                  bring an expeditious resolution to your dispute.
                </p>
                <div
                  ref={ref7}
                  className={`transition-all duration-700 ${
                    navIsFixed
                      ? "fixed top-24 left-0 right-0 z-20 bg-background-white drop-shadow-"
                      : "static"
                  }`}
                >
                  <NavBar className={`w-1/2 mb-4 m-auto `} />
                </div>
              </div>
              <div
                className={`transition-opacity ease-in duration-[1500ms] basis-1/2 ${
                  isVisibleLanding ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="rounded-lg bg-accent-blue w-max m-auto">
                  <img src="/headshot.png" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-white">
        <div className="px-16">
          <div
            ref={ref2}
            className={`transition-opacity ease-in duration-[1500ms] ${
              isVisibleMediation ? "opacity-100" : "opacity-0"
            }`}
            id="mediation"
          >
            <Mediation />
          </div>
          <div
            ref={ref3}
            className={`transition-opacity ease-in duration-[1500ms] ${
              isVisibleBio ? "opacity-100" : "opacity-0"
            }`}
            id="biography"
          >
            <Bio />
          </div>
          <div
            ref={ref5}
            className={`transition-opacity ease-in duration-[1500ms] ${
              isVisibleContact ? "opacity-100" : "opacity-0"
            }`}
            id="contact"
          >
            <Contact />
          </div>
          <footer className="font-cairo text-base text-center mt-16">
            COPYRIGHT © 2024 GIAMELA MEDIATION - ALL RIGHTS RESERVED.
          </footer>
        </div>
      </div>
      <div
        className={`transition-opacity ease-in duration-700 ${
          !isVisibleContact ? "opacity-100" : "opacity-0"
        }`}
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
