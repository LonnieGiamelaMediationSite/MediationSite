import { useRef } from "react";
import { Title } from "../Components/Title";
import "../index.css";
import { useIsVisible } from "../UseIsVisible";

export function Bio() {
  const refP1 = useRef(null);
  const isVisibleP1 = useIsVisible(refP1);

  const refP2 = useRef(null);
  const isVisibleP2 = useIsVisible(refP2);

  const refP3 = useRef(null);
  const isVisibleP3 = useIsVisible(refP3);

  const refP4 = useRef(null);
  const isVisibleP4 = useIsVisible(refP4);

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Title text="About Lonnie" />
      <div className="flex flex-col">
        <div
          ref={refP1}
          className={`flex w-10/12 my-16 self-start justify-between items-center transition-opacity ease-in duration-[1500ms] ${
            isVisibleP1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="/giamela-lonnie-headshot-2.jpeg"
            alt="Lonnie Giamela"
            className="w-1/4 m-16 rounded-md"
          />
          <p className="font-cairo font-extralight text-base m-auto text-justify leading-10">
            Lonnie has spent his entire legal career at Fisher Phillips, LLP,
            representing employers in all aspects of labor and employment law.
            The practice includes a mixture of preventative advice,
            single-plaintiff litigation and class action litigation. He has
            extensive experience in class action wage-hour lawsuits as well as
            representative lawsuits brought under California's Private Attorneys
            General Act (PAGA), having handled more than 200 such matters across
            the country. He is a frequent lecturer on employment law topics and
            have presented over 350 seminars to on topics including fair
            employment, medical leaves, mass layoffs, FMLA/CFRA compliance,
            independent contractor classification matters, preparation of
            handbooks, emerging legal issues and wage and hour compliance.
          </p>
        </div>
        <div
          ref={refP2}
          className={`flex w-10/12 my-16 self-end justify-between items-center transition-opacity ease-in duration-[1500ms] ${
            isVisibleP2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-cairo font-extralight text-base m-auto text-justify leading-10">
            Lonnie is a panel mediator for the United States District Court,
            Central District and ResolveLA mediation program at the Los Angeles
            Superior Court. He was one of sixteen attorneys asked by the Los
            Angeles Superior Court Complex Department to serve on its Ad Hoc
            Wage and Hour Class Action Committee. This committee worked to draft
            model settlement agreements to make the approval process more
            efficient. In 2022, he completed the Mediating the Litigated Case
            Program at Pepperdine University's Strauss Institute of Dispute
            Resolution.
          </p>
        </div>
        <div
          ref={refP3}
          className={`flex w-10/12 my-16 self-start justify-between items-center transition-opacity ease-in duration-[1500ms] ${
            isVisibleP3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-cairo font-extralight text-base m-auto text-justify leading-10">
            His professional experience brings unique perspective to the
            mediation process. He is one of the limited number of attorneys who
            has tried multiple class action lawsuits. He has litigated matters
            before all state and federal courts in California and has argued in
            both state and federal appellate courts. He has tried more than a
            dozen cases to verdict/award either in trial or arbitration.
          </p>
        </div>
        <div
          ref={refP4}
          className={`flex w-10/12 my-16 self-end justify-between items-center transition-opacity ease-in duration-[1500ms] ${
            isVisibleP4 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-cairo font-extralight text-base m-auto text-justify leading-10">
            He also incorporates long-standing principles of his family
            business, of one of the oldest Italian submarine sandwich delis in
            Los Angeles, in how he approaches mediation. He believes that
            consistent relationship building and learning about the customers'
            preference and background is important to getting mediation
            participants to leave the process with satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
