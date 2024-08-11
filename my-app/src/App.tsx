import { useRef } from "react";
import { Bio } from "./Sections/Bio";
import { Contact } from "./Sections/Contact";
import { Mediation } from "./Sections/Mediation";
import { useIsVisible } from "./UseIsVisible";
import "./index.css";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/Header";

function App() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisibleLanding = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisibleMediation = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisibleBio = useIsVisible(ref3);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisibleContact = useIsVisible(ref5);

  const ref6 = useRef<HTMLDivElement>(null);
  const isNavVisible = useIsVisible(ref6);

  const ref4 = useRef<HTMLDivElement>(null);
  const isSmallNavVisible = useIsVisible(ref4);

  return (
    <div className="bg-background-white">
      <div className="bg-background-white -mb-30 md:-mb-36 ">
        <div className="px-6 md:px-16">
          <div ref={ref1} id="home">
            <div className="hidden md:flex h-screen items-center">
              <div className="basis-2/3 md:basis-1/2 w-1/2 md:w-full self-start md:self-auto">
                <div
                  className={` transition-all duration-[1500ms] pt-4 md:pt-0 ${
                    isVisibleLanding ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src="/GiamelaMediationLogo.png"
                    onClick={() => window.location.replace("/")}
                    className={` mb-4 m-auto transition-all duration-[1500ms] hover:cursor-pointer w-1/2`}
                  />
                </div>
                <p
                  className={`font-cairo font-extralight text-base w-5/6 mb-14 m-auto text-justify md:leading-7 lg:leading-10 transition-opacity ease-in duration-[1500ms] ${
                    isVisibleLanding ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Giamela Mediation was started in 2023 as a means to both give
                  back to the legal community and to assist colleagues more
                  expeditiously resolve disputes prior to the expenditure of
                  unnecessary time and resources in litigation. Most cases can
                  and should settle prior to trial. Mediation allows the
                  opportunity for parties to control their future prior to
                  putting their fate in the hands of a judge, arbitrator or
                  jury. Using more than two decades as an employment law
                  practitioner, and recent experience as a panelist for both
                  Resolve LA and the Central District’s ADR panel, I seek to
                  bring an expeditious resolution to your dispute.
                </p>
                <div
                  ref={ref6}
                  className={`transition-all duration-[1500ms] ${
                    isVisibleLanding ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <NavBar className={`w-1/2 mb-4 m-auto `} />
                </div>
              </div>
              <div
                className={`transition-opacity ease-in duration-[1500ms] basis-1/3 md:basis-1/2 ${
                  isNavVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="rounded-lg w-full m-auto">
                  <img
                    src="/HeadshotPro.png"
                    className="w-8/12 rounded-lg m-auto"
                  />
                </div>
              </div>
            </div>
            <div className="md:hidden h-screen flex items-center">
              <div>
                <div className="flex items-center p-4">
                  <div className="basis-1/2 w-1/2 mx-2">
                    <div
                      className={` transition-all duration-[1500ms] ${
                        isVisibleLanding ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src="/GiamelaMediationLogo.png"
                        onClick={() => window.location.replace("/")}
                        className={` mb-4 m-auto transition-all duration-[1500ms] hover:cursor-pointer`}
                      />
                    </div>
                  </div>
                  <div className="basis-1/2 mx-2 ">
                    <div
                      className={`rounded-lg w-full m-auto transition-all duration-[1500ms] ${
                        isVisibleLanding ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src="/HeadshotPro.png"
                        className="w-3/4 rounded-lg m-auto"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    className={`font-cairo font-extralight text-base w-5/6 mb-14 m-auto text-justify md:leading-7 lg:leading-10 transition-opacity ease-in duration-[1500ms] ${
                      isVisibleLanding ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Giamela Mediation was started in 2023 as a means to both
                    give back to the legal community and to assist colleagues
                    more expeditiously resolve disputes prior to the expenditure
                    of unnecessary time and resources in litigation. Most cases
                    can and should settle prior to trial. Mediation allows the
                    opportunity for parties to control their future prior to
                    putting their fate in the hands of a judge, arbitrator or
                    jury. Using more than two decades as an employment law
                    practitioner, and recent experience as a panelist for both
                    Resolve LA and the Central District’s ADR panel, I seek to
                    bring an expeditious resolution to your dispute.
                  </p>
                  <div
                    ref={ref4}
                    className={`transition-all duration-[1500ms] ${
                      isVisibleLanding ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <NavBar className={`w-1/2 mb-4 m-auto `} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header hidden={ref6.current ? isNavVisible || isSmallNavVisible : true}>
        <>
          <div className="bg-background-white">
            <div className="px-6 md:px-16">
              <div
                ref={ref2}
                className={`transition-opacity ease-in duration-[1500ms] pt-32 mt-16 ${
                  isVisibleMediation ? "opacity-100" : "opacity-0"
                }`}
                id="mediation"
              >
                <Mediation />
              </div>
              <div
                ref={ref3}
                className={`transition-opacity ease-in duration-[1500ms] pt-32 ${
                  isVisibleBio ? "opacity-100" : "opacity-0"
                }`}
                id="biography"
              >
                <Bio />
              </div>
              <div
                ref={ref5}
                className={`transition-opacity ease-in duration-[1500ms] pt-32 ${
                  isVisibleContact ? "opacity-100" : "opacity-0"
                }`}
                id="contact"
              >
                <Contact />
              </div>
              <footer className="font-cairo text-xs md:text-base text-center pb-4 mt-4 md:mt-8 lg:mt-16">
                COPYRIGHT © 2024 GIAMELA MEDIATION - ALL RIGHTS RESERVED.
              </footer>
            </div>
          </div>
          <div
            className={`transition-opacity ease-in duration-300 ${
              !isVisibleContact &&
              !isNavVisible &&
              !isSmallNavVisible &&
              ref5.current &&
              ref6.current
                ? "opacity-100"
                : "opacity-0"
            } `}
          >
            <Footer />
          </div>
        </>
      </Header>
    </div>
  );
}

export default App;
