import { Title } from "../Components/Title";
import "../index.css";

export function Files() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Title text="Files" />
      <div className="flex justify-center my-16">
        {[1, 2, 3].map((number) => {
          return <Button key={number} />;
        })}
      </div>
    </div>
  );
}

function Button() {
  return (
    <>
      <div className="bg-accent-blue rounded-lg py-4 px-9 mx-24 text-center">
        <h2 className="font-bold font-cairo text-sm text-button-text-gray mb-8">
          Engagement Agreement
        </h2>
        <button className="text-headline-gray bg-button-gray font-cairo font-light text-3xl rounded-lg p-4 hover:text-button-gray hover:bg-headline-gray">
          <a href="/sample.pdf" download="sample">
            Download
          </a>
        </button>
      </div>
    </>
  );
}
