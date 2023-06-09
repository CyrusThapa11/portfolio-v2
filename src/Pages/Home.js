import React from "react";
import Sidebar from "../Components/Sidebar";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <>
      <>
        <div className="w-full min-h-[100vh] overflow-auto ">
          <div className="w-1/6 fixed top-[50%] translate-y-[-50%]  ">
            <Sidebar />
          </div>
          <div className="w-4/6  mx-auto h-auto  p-2 my-8">
            <div className="  my-5 h-[70%] flex justify-between flex-col md:flex-row ">
              {/* <Sidebar /> */}
              <div className="   md:w-[60%] sm:w-[40vw] w-[50vw] ">
                {" "}
                <img
                  src="/image1.jpeg"
                  alt=""
                  className="object-cover personal-image scale-110 "
                  srcset=""
                />{" "}
              </div>
              <div className=" md:w-[40%] w-full flex items-center justify-center">
                <div>
                  <div className=" text-3xl text-green-light ">
                    {" "}
                    &lt;intro&gt;{" "}
                  </div>
                  <p className="  text-xl pl-10 text-justify">
                    Hey Hey Hey !!! I am{" "}
                    <span className="text-green-light">Cyrus Thapa</span>, 4th
                    Year student at Jaypee Institute of Information
                    Technology,Noida. My expertise lies in Full stack
                    Development and Decentralized Application development.
                  </p>
                  <div className=" text-3xl text-green-light ">
                    {" "}
                    &lt;&#47;intro&gt;
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-20  ">
              {/* <Sidebar /> */}
              <h2 className=" text-2xl text-green-neon ">I'm a </h2>
              <h1 className=" text-3xl ">
                <Typewriter
                  words={[
                    "Full Stack Web Developer",
                    "Blockchain Dapp Developer",
                    "Competitve Programmer",
                    "Mobile Application developer ",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </h1>
            </div>
          </div>
        </div>
      </>
      <></>
    </>
  );
};

export default Home;
