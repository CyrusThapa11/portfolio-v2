import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import AboutMe from "./Pages/AboutMe";
import EducationAndExperience from "./Pages/EducationAndExperience";
import SkillsAndProjects from "./Pages/SkillsAndProjects";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className=" lg:px-20 md:px-10 lg:py-8 md:py-3 px-3 py-3 bg-black-dark min-h-[100vh] ">
      <AnimatedCursor
        innerSize={15}
        outerSize={35}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        clickables={[
          "a",
          "p",
          "div",
          "ul",
          "li",
          "img",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<ContactMe />} />
        <Route path="/about" exact element={<AboutMe />} />
        <Route path="/experience" exact element={<EducationAndExperience />} />
        <Route path="/projects" exact element={<SkillsAndProjects />} />
      </Routes>
    </div>
  );
}

export default App;
