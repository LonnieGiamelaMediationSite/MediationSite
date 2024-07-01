import "../index.css";

export function NavBar({ className }: { className: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <p
        className="px-6 font-quattrocento text-base font-bold hover:cursor-pointer hover:text-accent-blue"
        onClick={() => window.location.replace("/#mediation")}
      >
        MEDIATION
      </p>
      <p
        className="px-6 font-quattrocento text-base font-bold hover:cursor-pointer hover:text-accent-blue"
        onClick={() => window.location.replace("/#biography")}
      >
        BIOGRAPHY
      </p>
      <p
        className="px-6 font-quattrocento text-base font-bold hover:cursor-pointer hover:text-accent-blue"
        onClick={() => window.location.replace("/#files")}
      >
        FILES
      </p>
      <p
        className="px-6 font-quattrocento text-base font-bold hover:cursor-pointer hover:text-accent-blue"
        onClick={() => window.location.replace("/#contact")}
      >
        CONTACT
      </p>
    </div>
  );
}
