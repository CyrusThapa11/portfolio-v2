import React from "react";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <>
      <>
        <div className="  min-w-full min-h-screen grid grid-cols-12 gap-1 grid-rows-1 overflow-y-hidden">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-9  p-2  ">
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
            <div className=" my-5  ">
              {/* <Sidebar /> */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aut veniam rem, facere iure quae consequuntur est et!
              Optio, qui!
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
