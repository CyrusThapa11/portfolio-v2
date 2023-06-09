import React from "react";
import Sidebar from "../Components/Sidebar";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

// FaLocationDot

const ContactMe = () => {
  return (
    <>
      <div className="w-full min-h-[100vh] overflow-auto ">
        <div className="w-1/6 fixed top-[50%] translate-y-[-50%] ">
          <Sidebar />
        </div>
        <div className="w-4/6  mx-auto h-auto ">
          <div className="flex items-center justify-center h-[100vh] ">
            <h1 className="text-3xl text-[8rem] text-green-light pb-20 pr-10">
              Contact
            </h1>
          </div>
          <div className=" pt-10 pb-5  h-auto min-h-[100vh] ">
            <div className="w-full h-full">
              <h2 className=" px-10 pb-10 font-bold text-2xl ">
                Contacts info
              </h2>
              <div className="w-full  h-full grid grid-cols-2 grid-col gap-10  ">
                <div className=" py-7 px-5   border-[1px] border-white text-green-neon  flex flex-col items-center gap-5  justify-around ">
                  <AiFillPhone size={50} />
                  <h1 className=" text-white text-center ">Phone</h1>
                  <h1 className=" text-white text-center ">+91 7535955144</h1>
                </div>

                <div className=" py-7 px-5   border-[1px] border-white text-green-neon  flex flex-col items-center gap-5  justify-around ">
                  <AiFillMail size={54} />
                  <h1 className=" text-white text-center ">Email</h1>
                  <h1 className=" text-white text-center ">
                    thapacyrus30@gmail.com
                  </h1>
                </div>
                <div className=" py-7 px-5   border-[1px] border-white text-green-neon  flex flex-col items-center gap-5  justify-around ">
                  <ImLocation size={54} />
                  <h1 className=" text-white text-center ">Address</h1>
                  <h1 className=" text-white text-center ">
                    543 Tapkeshwar Colony, Garhi Cantt , Dehradun , Uttrakhand
                  </h1>
                </div>
                <div className=" py-7 px-5   border-[1px] border-white text-green-neon  flex flex-col items-center gap-5  justify-around ">
                  <BsFillPersonCheckFill size={50} />
                  <h1 className=" text-white text-center ">
                    Freelance/Internship
                  </h1>
                  <h1 className=" text-white text-center ">
                    Yes I am available for part time Internship
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full h-full  mt-40 mb-10  ">
              <h1 className="my-10 px-10 font-bold text-2xl ">Contact Form</h1>
              <div className="border-[1px] border-subtle w-full h-full p-10 ">
                <div className=" ">
                  <input
                    placeholder="Name"
                    type="text"
                    className=" py-3 placeholder:text-subtle focus:placeholder:text-white focus:border-white transition-all focus:outline-none  w-full bg-transparent border-subtle border-b-[1px] "
                  />
                </div>
                <div className=" my-5 ">
                  <input
                    placeholder="Email"
                    type="email"
                    className=" py-3 placeholder:text-subtle focus:placeholder:text-white focus:border-white transition-all focus:outline-none  w-full bg-transparent border-subtle border-b-[1px] "
                  />
                </div>
                <div className=" my-5 max-h-[30vh] ">
                  <textarea
                    placeholder="Message"
                    type="text"
                    rows="7"
                    // onResize={"none"}
                    className=" py-3 placeholder:text-subtle focus:placeholder:text-white focus:border-white transition-all focus:outline-none  resize-none  h-full w-full bg-transparent border-subtle border-b-[1px] "
                  />
                </div>
                <button className=" border-2 border-green-neon text-green-neon px-6 py-3  ">
                  <span text-green-neon>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
