import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { AiOutlineGithub, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "id-7",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1685898930/creative-2_s5du9n.png",
    name: "Static responsive website-02",
    tags: ["html", "css", "javscript"],
    githubLink: "https://github.com/copyNinja1219/static-2",
    deployedURL: "https://copyninja1219.github.io/static-2/",
  },

  {
    id: "id-1",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1683600618/i1_ymg1rr.png",
    name: "Block-med",
    tags: [
      "react",
      "blockchain",
      "web3",
      "solidity",
      "truffle",
      "ganache",
      "ethereum",
    ],
    githubLink: "https://github.com/copyNinja1219/BlockMed",
    deployedURL: null,
  },
  {
    id: "id-4",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1685898503/street-seller_j9124e.png ",
    name: "Street-Seller",
    tags: [
      "react",
      "context-api",
      "nodejs",
      "express",
      "mongodb",
      "full-stack",
    ],
    githubLink: "https://github.com/copyNinja1219/StreetSellerFront",
    deployedURL: "https://street-seller-front.vercel.app/",
  },
  {
    id: "id-3",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1685897897/slack-1_xmv6fw.png",
    name: "Slack Clone",
    tags: ["react", "redux", "firebase", "styled-components"],
    githubLink: "https://github.com/copyNinja1219/slack-clone-1",
    deployedURL: "https://slack-92875.web.app/",
  },
  {
    id: "id-5",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681976071/Projects/L2_yxxlar.png",
    name: "TenCGPA",
    tags: ["react", "context-api", "nodejs", "express", "MySQL", "full-stack"],
    githubLink: "https://github.com/copyNinja1219/TenCGPA",
    deployedURL: null,
  },
  {
    id: "id-2",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1685897897/redux-1_jucxhh.png",
    name: "Clothing web-application",
    tags: ["react", "redux", "nodejs", "mongodb", "express", "full-stack"],
    githubLink: "https://github.com/copyNinja1219/mern-ecommerce-01",
    deployedURL: "https://mern-ecommerce-01.vercel.app/",
  },
  {
    id: "id-6",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1685898931/food-1_n05j7o.png",
    name: "Static responsive website-01",
    tags: ["html", "css", "javscript"],
    githubLink: "https://github.com/copyNinja1219/static-1",
    deployedURL: "https://copyninja1219.github.io/static-1/",
  },
  {
    id: "id-8",
    ImageURL:
      "https://res.cloudinary.com/vinsmokecyrus/image/upload/v1685898931/cars-3_lb0yzm.png",
    name: "Static responsive website-03",
    tags: ["html", "css", "javscript"],
    githubLink: "https://copyninja1219.github.io/static-3/",
    deployedURL: "https://copyninja1219.github.io/static-3/",
  },
];

const SkillsAndProjects = () => {
  const [Projects, setProjects] = useState({
    projects,
    ProjectType: 1,
  });

  console.log("Projects", Projects);
  return (
    <>
      <div className="w-full min-h-[100vh] overflow-auto ">
        <div className="w-1/6 fixed top-[50%] translate-y-[-50%] ">
          {" "}
          <Sidebar />{" "}
        </div>
        <div className="w-4/6  mx-auto h-auto ">
          <div className="flex items-center justify-center h-[100vh] ">
            <h1 className="text-3xl text-[8rem] text-green-light pb-20 pr-10">
              Projects
            </h1>
          </div>
          <div className=" bg-black-light flex items-center justify-center h-auto transition-all ">
            {/* <h1 className="text-3xl text-[8rem]  ">Projects</h1> */}
            <div className="w-full h-full transition-all">
              <div className=" border-[1px] p-5 ">
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
                    {" "}
                    React{" "}
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
                    {" "}
                    Html/Css{" "}
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
                    {" "}
                    Full-Stack{" "}
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
                    {" "}
                    Blockchain{" "}
                  </li>
                </ul>
              </div>
              <div className="mt-20 p-5  flex flex-wrap gap-2 md:grid-cols-2  transition-all card-container ">
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
                                  {" "}
                                  <AiFillEye />{" "}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsAndProjects;
