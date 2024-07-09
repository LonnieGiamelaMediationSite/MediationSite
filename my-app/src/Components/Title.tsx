import "../index.css";

export function Title({ text }: { text: string }) {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t-2 border-headline-gray"></div>
      <span className="flex-shrink mx-4 font-quattrocento text-xl md:text-3xl lg:text-5xl text-headline-gray tracking-widestest">
        {text.toUpperCase()}
      </span>
      <div className="flex-grow border-t-2 border-headline-gray"></div>
    </div>
  );
}
