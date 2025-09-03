import React from "react";

const About = () => {
  return (
    <div id="about" className="md:mx-20 p-6 m-5 flex flex-col md:flex gap-10">
      <h2 className="text-white text-center text-3xl font-semibold">
        About me
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="left">
          <img
            className="rounded-lg shadow-lg"
            width={800}
            src="https://t4.ftcdn.net/jpg/06/38/71/61/360_F_638716104_ZaLUjHLnqDh5N8s8H4diKZLaAeB7qquq.jpg"
            alt=""
          />
        </div>
        <div className="right text-white text-sm flex flex-col gap-6">
          <div>
            <p>
              I am an experienced Mern Stack Developer with over a decade of
              professional experties in the field. Throughout my career, I have
              had the privillage of collaborating with prestigious
              organizations, contributing to their success and growth.
            </p>
            <br />
            <p>
              My passion for Mern Stack development is not only reflect in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project
            </p>
          </div>
        <div className="flex flex-col gap-3">
  {/* HTML & CSS */}
  <div className="flex items-center gap-4 hover:scale-105 transition cursor-pointer">
    <p className="m-0 w-28">HTML & CSS</p>
    <div className="flex items-center gap-3 flex-1">
      <hr
        className="border-0 outline-0 h-1 rounded bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]"
        style={{ width: "90%" }} // 👈 width = percentage
      />
      <span>90%</span>
    </div>
  </div>

  {/* Javascript */}
  <div className="flex items-center gap-4 hover:scale-105 transition cursor-pointer">
    <p className="m-0 w-28">Javascript</p>
    <div className="flex items-center gap-3 flex-1">
      <hr
        className="border-0 outline-0 h-1 rounded bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]"
        style={{ width: "70%" }}
      />
      <span>70%</span>
    </div>
  </div>

  {/* React Js */}
  <div className="flex items-center gap-4 hover:scale-105 transition cursor-pointer">
    <p className="m-0 w-28">React Js</p>
    <div className="flex items-center gap-3 flex-1">
      <hr
        className="border-0 outline-0 h-1 rounded bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]"
        style={{ width: "80%" }}
      />
      <span>80%</span>
    </div>
  </div>

  {/* Node Js */}
  <div className="flex items-center gap-4 hover:scale-105 transition cursor-pointer">
    <p className="m-0 w-28">Node Js</p>
    <div className="flex items-center gap-3 flex-1">
      <hr
        className="border-0 outline-0 h-1 rounded bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]"
        style={{ width: "60%" }}
      />
      <span>60%</span>
    </div>
  </div>
</div>

        </div>
      </div>
      <div className="text-white flex w-[100%] justify-around mb-10">
        <div className="flex flex-col items-center gap-4 hover:scale-105 transition cursor-pointer">
          <h1 className="text-3xl font-bold bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent">
            1+
          </h1>
          <p>YEARS OF EXPERIENCE </p>
        </div>
        <hr />
        <div className="flex flex-col items-center gap-4 hover:scale-105 transition cursor-pointer">
          <h1 className="text-3xl font-bold bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent">
            50+
          </h1>
          <p>PROJECTS COMPLETED </p>
        </div>
        <hr />
        <div className="flex flex-col items-center gap-4 hover:scale-105 transition cursor-pointer">
          <h1 className="text-3xl font-bold bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent">
            10+
          </h1>
          <p>HAPPY CLIENTS </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
