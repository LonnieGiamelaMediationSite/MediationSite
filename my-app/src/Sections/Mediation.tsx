import { Title } from "../Components/Title";
import "../index.css";

export function Mediation() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Title text="Mediation" />
      <div className="w-10/12 m-auto my-8 md:my-12 lg:my-16">
        <div className="mb-8">
          <h1 className="font-cairo font-bold text-base lg:text-lg">
            Mediation Fee
          </h1>

          <p className="font-cairo font-extralight text-base lg:text-lg md:leading-7 lg:leading-10 text-justify">
            Half-day and Full-Day mediations are available. Half-Day mediations
            are $6,000 and Full-Day mediations are $10,000. The mediation fee
            includes all preparation time. Mediations can be in-person, virtual
            or hybrid. If the mediation requires more than reasonable follow-up,
            time will be charged to the parties at the rate of $600/hour. The
            mediation fee is due two weeks from the date the confirming email is
            sent to all counsel. The fee is fully refundable if the mediation is
            cancelled or rescheduled at least thirty-days prior to the scheduled
            date. If the mediation is cancelled or rescheduled less than thirty
            days before the mediation date, the fee will not be refunded unless
            another mediation is able to be scheduled on that date. Every
            individual, who participates in the mediation, will be required to
            sign a written confidentiality agreement to ensure the most
            beneficial negotiation process possible.
          </p>
        </div>
        <div className="my-8">
          <h1 className="font-cairo font-bold text-base lg:text-lg">
            Mediation Brief
          </h1>

          <p className="font-cairo font-extralight text-base lg:text-lg md:leading-7 lg:leading-10 text-justify">
            Mediation briefs are due five days prior to the mediation. It is
            unnecessary to provide summary of general laws applying to a claim
            or cause of action in the case (e.g. the Brinker standard for
            providing meal periods, the prima facie elements of a sexual
            harassment cause of action). Of course, if there is a unique legal
            or procedural issue in the case, highlight it in the mediation
            brief. The most useful briefs for me are those that focus on the
            facts, the core disputes between the parties and anything I need to
            know that may significantly impact negotiations. Please also
            identify who will be present for your side at the mediation. Briefs
            can be e-mailed to{" "}
            <a href="mailto:lonniegiamela@gmail.com" className="underline">
              lonniegiamela@gmail.com
            </a>
            . Please also send dropbox, or similar links, if there are extensive
            exhibits.
          </p>
        </div>
        <div className="my-8">
          <h1 className="font-cairo font-bold text-base lg:text-lg">
            Settlement Agreements
          </h1>

          <p className="font-cairo font-extralight text-base lg:text-lg md:leading-7 lg:leading-10 text-justify">
            I highly recommend the parties exchange a draft settlement
            agreement, or memorandum of understanding particularly in class
            action cases, prior to the mediation and can help in that process if
            necessary. Please make sure your mediation brief includes any
            non-monetary term of settlement that is not standard in a settlement
            agreement. Dealing with all terms and condition of a settlement
            agreement, prior to mediation, except for the settlement amount, has
            demonstrated benefits for making the negotiation process smoother
            and more efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
