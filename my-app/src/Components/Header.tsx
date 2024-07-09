import { NavBar } from "./NavBar";
import "../index.css";

export function Header({
  children,
  hidden,
}: {
  children: React.ReactNode;
  hidden: boolean;
}) {
  return (
    <div className="bg-background-white">
      <div
        className={`bg-background-white transition-all duration-300 fixed top-0 right-0 left-0 z-10 lg:h-32 drop-shadow-sm ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className={``}>
          <img
            src="/GiamelaMediationLogo.png"
            onClick={() => window.location.replace("/")}
            className={` lg:mb-4 m-auto transition-all duration-700 hover:cursor-pointer w-1/6 mt-4`}
          />
        </div>
        <div className={``}>
          <NavBar className={`w-1/2 mb-4 m-auto `} />
        </div>
      </div>
      {children}
    </div>
  );
}
