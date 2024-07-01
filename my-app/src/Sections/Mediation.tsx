import { useState } from "react";
import { Title } from "../Components/Title";
import "../index.css";

export function Mediation() {
  const [view, setView] = useState<
    "fee" | "briefs" | "agreements" | undefined
  >();

  return (
    <div>
      <Title text="Mediation" />
      <div className="w-3/4 m-auto my-16">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            if (view === "fee") {
              setView(undefined);
              return;
            } else {
              setView("fee");
            }
          }}
        >
          <h1 className="font-cairo font-bold text-lg">
            Mediation Fee and Cancellation Policy
          </h1>
          <h1 className="font-cairo font-bold text-lg">+</h1>
        </div>
        <div className={view === "fee" ? "" : "hidden"}>
          <p className="font-cairo font-extralight text-lg">
            Daily and half-day mediations are available. Half-Day mediations are
            $8,000 and Full-Day mediations are $10,000. The mediation fee
            includes all preparation time. Mediations can be in-person, virtual
            or hybrid. If the mediation requires more than reasonable follow-up,
            time will be charged to the parties at the rate of $600/hour. The
            mediation fee is due two weeks from the date the confirming email is
            sent to all counsel. The fee is fully refundable if the mediation is
            cancelled or rescheduled at least thirty-days prior to the scheduled
            date. If the mediation is cancelled or rescheduled less than thirty
            days before the mediation date, the fee will not be refunded unless
            another mediation is able to be scheduled on that date.
          </p>
        </div>
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            if (view === "briefs") {
              setView(undefined);
              return;
            } else {
              setView("briefs");
            }
          }}
        >
          <h1 className="font-cairo font-bold text-lg">Mediation Briefs</h1>
          <h1 className="font-cairo font-bold text-lg">+</h1>
        </div>
        <div className={view === "briefs" ? "" : "hidden"}>
          <p className="font-cairo font-extralight text-lg">
            Mediation briefs are due five days prior to the mediation. Unless
            there is a unique legal issue in the case, I do not need a review of
            the prima facie elements of fair employment or wage hour causes of
            action. It is unnecessary to provide summary of general laws
            applying to a claim or cause of action in the case (e.g. the Brinker
            standard for providing meal periods). The most useful briefs are
            those that focus on the facts, the core disputes between the parties
            and anything I need to know that may significantly impact
            negotiations. Briefs can be e-mailed to lonniegiamela@gmail.com.
            Please also send dropbox, or similar links, if there are extensive
            exhibits.
          </p>
        </div>
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => {
            if (view === "agreements") {
              setView(undefined);
              return;
            } else {
              setView("agreements");
            }
          }}
        >
          <h1 className="font-cairo font-bold text-lg">
            Settlement Agreements
          </h1>
          <h1 className="font-cairo font-bold text-lg">+</h1>
        </div>
        <div className={view === "agreements" ? "" : "hidden"}>
          <p className="font-cairo font-extralight text-lg">
            I highly recommend the parties exchange a draft settlement
            agreement, or memorandum of understanding, prior to the mediation
            and can help in that process if necessary. Please make sure your
            mediation brief includes any non-monetary term of settlement that is
            not standard in a settlement agreement. Dealing with all terms and
            condition of a settlement agreement, prior to mediation, except for
            the settlement amount, has demonstrated benefits for making the
            negotiation process smoother and more efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
