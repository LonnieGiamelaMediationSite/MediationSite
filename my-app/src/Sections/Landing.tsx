import { NavBar } from "../Components/NavBar";
import "../index.css";

export function Landing() {
  return (
    <div className="flex my-32">
      <div className="basis-1/2">
        <img src="/GiamelaMediationLogo.png" />
        <p className="font-cairo font-extralight text-base">
          Giamela Mediation was started in 2023 as a means to both give back to
          the legal community and to assist colleagues more expeditiously
          resolve disputes prior to expenditure of unnecessary time and
          resources in litigation. I believe that mediation allows parties the
          opportunity to take control of their future prior to putting it into
          the hands of a judge, arbitrator or jury.
        </p>
        <NavBar />
      </div>
      <div className="basis-1/2">
        <div className="rounded-lg bg-accent-blue w-max">
          <img src="/headshot.png" />
        </div>
      </div>
    </div>
  );
}
