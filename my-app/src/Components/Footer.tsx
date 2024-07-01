import "../index.css";

export function Footer() {
  return (
    <>
      <div className="w-full h-max bg-accent-blue flex justify-between items-center fixed bottom-0">
        <div className="flex justify-center mx-24">
          <div className="mx-4">
            <a
              href={"https://www.linkedin.com/in/lonnie-giamela-9466296/"}
              target="_blank"
            >
              <div className="w-max bg-accent-blue rounded-full hover:cursor-pointer hover:bg-headline-gray border border-headline-gray">
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
              <div className="w-max bg-accent-blue rounded-full hover:cursor-pointer hover:bg-headline-gray border border-headline-gray">
                <img src="x-logo-white.png" alt="X Logo" className="w-8 p-2" />
              </div>
            </a>
          </div>
        </div>
        <div className="text-background-white mx-24 text-center">
          <a
            className="font-cairo font-extralight text-sm "
            href="mailto:lonniegiamela@gmail.com"
          >
            lonniegiamela@gmail.com
          </a>
          <p className="font-cairo font-extralight text-sm ">(818) 390-0019</p>
        </div>
      </div>
    </>
  );
}
