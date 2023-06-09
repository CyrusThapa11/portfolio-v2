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
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// TbBrandCpp

const EducationAndExperience = () => {
  return (
    <div>
      <div className="w-full min-h-[100vh] overflow-auto ">
        <div className="w-1/6 fixed top-[50%] translate-y-[-50%] ">
          <Sidebar />
        </div>
        <div className="w-4/6  mx-auto h-auto ">
          <div className="flex items-center justify-center h-[100vh] ">
            <h1 className="text-3xl text-[6rem] h-auto text-green-light leading-[8rem]">
              About Me
            </h1>
          </div>
          <div className=" border-2  items-center justify-center h-auto transition-all ">
            {/* <h1 className="text-3xl text-[8rem]  ">Projects</h1> */}
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
                  <h3 className="absolute -top-3 left-28 ">2017</h3>
                  <h1 className=" my-3 text-xl font-semibold ">Class X</h1>
                  <p className=" my-3 text-sm">
                    Scored 9 CGPA in CBSE Class X board examinations.
                  </p>
                </div>
              </div>

              {/*<div className=" border-[1px] p-5 ">
                 <ul className="flex gap-5 lg:flex-nowrap flex-wrap ">
                  <li
                    className={` cursor-pointer border-hover px-4 py-2 ${
                      Projects.ProjectType === 1 ? "activee" : ""
                    } `}
                    onClick={() => {
                      setProjects({
                        ...Projects,
                        projects: projects,
                        ProjectType: 1,
                      });
                    }}
                  >
                    All
                  </li>
                  <li
                    className={` cursor-pointer border-hover px-4 py-2 ${
                      Projects.ProjectType === 2 ? "activee" : ""
                    } `}
                    onClick={() => {
                      let newprojects = projects;
                      newprojects = projects.filter((p) =>
                        p.tags.includes("react")
                      );
                      setProjects({
                        ...Projects,
                        projects: newprojects,
                        ProjectType: 2,
                      });
                    }}
                  >
                    
                    React
                  </li>
                  <li
                    className={` cursor-pointer border-hover px-4 py-2 ${
                      Projects.ProjectType === 3 ? "activee" : ""
                    } `}
                    onClick={() => {
                      let newprojects = projects;
                      newprojects = projects.filter((p) =>
                        p.tags.includes("html")
                      );
                      setProjects({
                        ...Projects,
                        projects: newprojects,
                        ProjectType: 3,
                      });
                    }}
                  >
                    
                    Html/Css
                  </li>
                  <li
                    className={` cursor-pointer border-hover px-4 py-2 ${
                      Projects.ProjectType === 4 ? "activee" : ""
                    } `}
                    onClick={() => {
                      let newprojects = projects;
                      newprojects = projects.filter((p) =>
                        p.tags.includes("full-stack")
                      );
                      setProjects({
                        ...Projects,
                        projects: newprojects,
                        ProjectType: 4,
                      });
                    }}
                  >
                    
                    Full-Stack
                  </li>
                  <li
                    className={` cursor-pointer border-hover px-4 py-2 ${
                      Projects.ProjectType === 5 ? "activee" : ""
                    } `}
                    onClick={() => {
                      let newprojects = projects;
                      newprojects = projects.filter((p) =>
                        p.tags.includes("blockchain")
                      );
                      console.log("newprojects", newprojects);
                      setProjects({
                        ...Projects,
                        projects: newprojects,
                        ProjectType: 5,
                      });
                    }}
                  >
                    
                    Blockchain
                  </li>
                </ul>
              </div> */}
              {/*  <div className="mt-20 p-5  flex flex-wrap gap-2 md:grid-cols-2  transition-all card-container ">
                {Projects.projects &&
                  Projects.projects.map((project, index) => (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={project.id}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        // ref={(el) => (refArray.current[index] = el)}

                        className=" p-7 m-3 w-[25vw] bg-black-dark rounded-md shadow-2xl shew-card transition-all  "
                      >
                        <div className="w-[100%] mb-5 shew-card-inner ">
                          <div className=" absolute inset-0 w-full h-full project-links opacity-1  flex items-center justify-center ">
                            <ul className=" flex gap-4 opacity-0 text-3xl text-black z-30">
                              <Link target="_blank" to={project.githubLink}>
                                <li className=" transition-all hover:scale-125 p-3 border-2 border-transparent hover:border-black hover:rounded-full  hover:border-spacing-3 ">
                                  <AiOutlineGithub />
                                </li>
                              </Link>
                              <Link
                                target="_blank"
                                to={
                                  !project.deployedURL
                                    ? "/skills"
                                    : project.deployedURL
                                }
                              >
                                <li className=" transition-all hover:scale-125 p-3 border-2 border-transparent hover:border-black hover:rounded-full  hover:border-spacing-3 ">
                                  
                                  <AiFillEye />
                                </li>
                              </Link>
                            </ul>
                          </div>
                          <img src={project.ImageURL} alt="" srcset="" />
                        </div>
                        <div className="flex flex-wrap ">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className=" px-3 py-1 text-green-300 capitalize  "
                            >
                              &lt;&#47;{tag}&gt;
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ))}
              </div> */}
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

export default EducationAndExperience;
