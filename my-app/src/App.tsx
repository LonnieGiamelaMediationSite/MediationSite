import { Bio } from "./Sections/Bio";
import { Contact } from "./Sections/Contact";
import { Files } from "./Sections/Files";
import { Landing } from "./Sections/Landing";
import { Mediation } from "./Sections/Mediation";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-background-white">
        <div className="p-16">
          <Landing />
          <Mediation />
          <Bio />
          <Files />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
