import React from "react";
import Sidebar from "../Components/Sidebar";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs, FaEthereum } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiRedux,
  SiPython,
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiGithub,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { Link } from "react-router-dom";
import Resume from "../pdfs/20103166_CYRUS_THAPA_RESUME_4.pdf";

const AboutMe = () => {
  const DownloadResume = () => {
    console.log("DownloadResume");
  };
  return (
    <div>
      <div className="w-full min-h-[100vh] overflow-auto ">
        <div className="w-1/6 fixed top-[50%] translate-y-[-50%] ">
          <Sidebar />
        </div>
        <div className="w-4/6  mx-auto h-auto ">
          <div className="flex items-center justify-center h-[100vh] ">
            <h1 className="text-3xl text-[8rem] h-auto text-green-light leading-[8rem] pb-20 pr-10 ">
              About Me
            </h1>
          </div>
          <div className=" border-2  items-center justify-center h-auto transition-all ">
            {/* <h1 className="text-3xl text-[8rem]  ">Projects</h1> */}
            <div className="p-10  ">
              <p>
                I am Cyrus Thapa a 21-year college student pursuing a bachelor's
                degree in computer science engineering. Being self-motivated and
                highly energetic helps me expand my tech stack and apply the
                knowledge by building projects . I am a team player and
                efficient in time management. Apart from this I am skilled in
                data structures and algorithms and problem solving which makes
                me an active competitve programmer. Some of my social links are
                below.
              </p>
              <div className=" flex flex-wrap gap-10 mt-5">
                <Link
                  target="_blank"
                  to="https://codeforces.com/profile/Cyrus11"
                >
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiCodeforces size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Codeforces
                    </h3>
                  </div>
                </Link>
                <Link target="_blank" to="https://leetcode.com/Cyrus11/">
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiLeetcode size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Leetcode
                    </h3>
                  </div>{" "}
                </Link>
                <Link
                  target="_blank"
                  to="https://www.codechef.com/users/cyrus1219"
                >
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiCodechef size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Codechef
                    </h3>
                  </div>{" "}
                </Link>
                <Link
                  target="_blank"
                  to="https://auth.geeksforgeeks.org/user/cyrusthapa/practice"
                >
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiGeeksforgeeks size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Geeksforgeeks
                    </h3>
                  </div>{" "}
                </Link>
                <Link target="_blank" to="https://github.com/copyNinja1219">
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiGithub size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Github
                    </h3>
                  </div>{" "}
                </Link>
                <Link target="_blank" to="https://linkedin.com/in/cyrusthapa">
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiLinkedin size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Linkedin
                    </h3>
                  </div>
                </Link>
                <Link target="_blank" to="https://twitter.com/CyrusThapa2">
                  <div className=" social-links flex    hover:text-green-neon  hover:border-green-300 border-2 p-2 rounded-full ">
                    <SiTwitter size={35} style={{ margin: "auto" }} />
                    <h3 className=" my-2  " style={{ "--width": "7rem" }}>
                      Twitter
                    </h3>
                  </div>
                </Link>
                <Link
                  to={Resume}
                  download="20103166_CYRUS_THAPA_RESUME_4.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" border-2 border-green-neon text-green-neon px-6 py-3  ">
                    Download Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full h-full transition-all flex gap-5">
              <div className=" grid flex-1 p-10  ">
                <h2 className="text-center text-2xl font-bold "> Education</h2>
                <div className="  mt-7 border-l-2  p-3 before-circle hover:border-l-green-300 transition-all relative ">
                  <h3 className="absolute -top-3 left-28 ">2020-24</h3>
                  <h1 className=" my-3 text-xl font-semibold ">
                    Bachelor Of Technology
                  </h1>
                  <p className=" my-3 text-sm">
                    Pursuing a B.Tech in Computer Science Engineering from
                    Jaypee Institute of Information Technology, Noida - 62.
                    Currently in 6th semester with a CGPA of 8.3
                  </p>
                </div>
                <div className="  border-l-2  p-3 before-circle hover:border-l-green-300 transition-all relative ">
                  <h3 className="absolute -top-3 left-28 ">2019</h3>
                  <h1 className=" my-3 text-xl font-semibold ">Class XII</h1>
                  <p className=" my-3 text-sm">
                    Graduated high school from Grace Academy school, Dehradun,
                    Uttrakhand, from CBSE science stream (PCM + CS) with an
                    overall score of 95.4% and a PCM aggregate of 96%.
                  </p>
                </div>
                <div className="  border-l-2  p-3 before-circle hover:border-l-green-300 transition-all relative ">
                  <h3 className="absolute -top-3 left-28 ">2017</h3>
                  <h1 className=" my-3 text-xl font-semibold ">Class X</h1>
                  <p className=" my-3 text-sm">
                    Scored 9 CGPA in CBSE Class X board examinations.
                  </p>
                </div>
              </div>
              <div className=" grid flex-1 p-10  ">
                <h2 className="text-center text-2xl font-bold "> Experience</h2>
                <div className="  mt-7 border-l-2  p-3 before-circle hover:border-l-green-300 transition-all relative ">
                  <h3 className="absolute -top-3 left-28 ">
                    April – June 2022
                  </h3>
                  <h1 className=" my-3 text-xl font-semibold ">
                    Chegg Subject Matter Expert
                  </h1>
                  <p className=" my-3 text-sm">
                    Provided precise and thorough answers to students’ questions
                    by drawing on extensive knowledge of computer science ideas
                    and concepts.
                  </p>
                </div>
                <div className="  border-l-2  p-3 before-circle hover:border-l-green-300 transition-all relative ">
                  <h3 className="absolute -top-3 left-28 ">
                    April – March 2022
                  </h3>
                  <h1 className=" my-3 text-xl font-semibold ">
                    Technical Content Writer
                  </h1>
                  <p className=" my-3 text-sm">
                    Contributed in total of 9 articles in the domain of ReactJs,
                    Redux, Components, Context-API at GeeksforGeeks.
                  </p>
                </div>
                <div className="  border-l-2  p-3 before-circle hover:border-l-green-300 transition-all relative ">
                  <h3 className="absolute -top-3 left-28 ">2023-Present</h3>
                  <h1 className=" my-3 text-xl font-semibold ">A code daily</h1>
                  <p className=" my-3 text-sm">
                    I am a part of an active free and open source online coding
                    community where we resolve each other's doubts related to
                    technical domain like DSA, web development and was involved
                    in taking online workshops on discord .
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <>
              <div className="p-10 flex flex-wrap gap-5 ">
                <div className=" icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <GrReactjs size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">React</h3>
                </div>
                <div className=" icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <FaNodeJs size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Nodejs</h3>
                </div>
                <div className=" icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <SiExpress size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Express</h3>
                </div>
                <div className=" icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <SiMongodb size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Mongodb</h3>
                </div>
                <div className="  icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <SiFirebase size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Firebase</h3>
                </div>
                <div className=" icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <SiRedux size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Redux</h3>
                </div>
                <div className=" icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <SiPython size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Python</h3>
                </div>
                <div className="  icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <FaEthereum size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">Blockchain</h3>
                </div>
                <div className="  icon-style  hover:text-green-neon  hover:border-green-300 border-2 p-10 rounded-full ">
                  <TbBrandCpp size={50} style={{ margin: "auto" }} />
                  <h3 className=" my-2 ">CPP</h3>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
