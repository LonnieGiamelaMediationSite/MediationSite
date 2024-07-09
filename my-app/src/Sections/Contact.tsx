import { Title } from "../Components/Title";
import "../index.css";

export function Contact() {
  return (
    <div className="flex flex-col justify-end">
      <Title text="Contact" />
      <div>
        <div className="flex justify-center my-8">
          <div className=" mx-4">
            <a
              href={"https://www.linkedin.com/in/lonnie-giamela-9466296/"}
              target="_blank"
            >
              <div className="w-max bg-accent-blue rounded-full hover:cursor-pointer hover:bg-headline-gray">
                <img
                  src="/In-White-128@2x.png"
                  alt="Linkedin Logo"
                  className="w-8 p-2"
                />
              </div>
            </a>
          </div>
          <div className=" mx-4">
            <a href={"https://x.com/calemployeratty?lang=en"} target="_blank">
              <div className="w-max bg-accent-blue rounded-full hover:cursor-pointer hover:bg-headline-gray">
                <img src="x-logo-white.png" alt="X Logo" className="w-8 p-2" />
              </div>
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="font-cairo font-extralight text-2xl">
            Giamela Mediation
          </p>
          <br />
          <p className="font-cairo font-extralight text-2xl">
            4770 Eureka Avenue #277
          </p>
          <p className="font-cairo font-extralight text-2xl">
            Yorba Linda, California 92885
          </p>
          <br />
          <a
            className="font-cairo font-extralight text-2xl"
            href="mailto:lonniegiamela@gmail.com"
          >
            lonniegiamela@gmail.com
          </a>
          <p className="font-cairo font-extralight text-2xl">(818) 390-0019</p>
        </div>
      </div>
    </div>
  );
}
