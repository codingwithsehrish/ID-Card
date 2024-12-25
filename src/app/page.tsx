import React from "react";
import Image from "next/image";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6">
        <div className=" bg-slate-200 p-12 rounded-lg shadow-lg max-w-4*1 w-full flex items-center justify-center border-4-sky-300">
          {/* {backgroud picture} */}

          <div className="absolute inset-0 flex items-center  justify-center">
            <div className="relative w-full h-full  max-w-[500px] max-h-[400px]">
              <Image
                src="/images/backgroud.jpg"
                alt="background Image"
                width={500}
                height={400}
                className="opacity-10 "
              />
            </div>
          </div>

          {/* {left section} */}

          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/* logo Section */}
            <img
              src="/images/logo.jpg"
              alt="card logo"
              className="absolute top-[-10] left-0 w-16 h-18 z-10"
            />

            <p className="mb-2">
              <span className="text-sky-500 border-blue-700">
                {" "}
                <strong> Name: </strong>
              </span>
              <span className="text-black">Sehrish M. Saleem</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> ROll No: </strong>
              </span>
              <span className="text-black">00197377</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Distance Learning: </strong>
              </span>
              <span className="text-black">No</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> City:</strong>
              </span>
              <span className="text-black">Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Center: </strong>
              </span>
              <span className="text-black">Governor House Karachi</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Campus: </strong>
              </span>
              <span className="text-black">Main</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Days/Time:</strong>
              </span>
              <span className="text-black">Saturday-02:00 PM - 05:00 PM</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {" "}
                <strong> Batch: </strong>
              </span>
              <span className="text-black">1</span>
            </p>

            {/* Button Section */}

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border border-gray-300  bg-blue-900  text-white items-center justify-center  flex">
                <span
                  className=" absolute inset-0 bg-slate-500"
                  style={{ width: "50%" }}
                ></span>
                <span className="relative z-10"> Q1 & WMD </span>
              </button>
            </div>
          </div>
          {/*Right  Section */}

          <div className=" w-1/3 text-center relative z-10">
            <Image
              src={"/images/seh.jpg"}
              alt={"Profile Picture "}
              width={100}
              height={100}
              className="rounded-lg mb-6 w-full border border-blue-900"
            />
            <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2*1">
              Authorized Signature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
