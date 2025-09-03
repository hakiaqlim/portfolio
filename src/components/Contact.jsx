import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f9f22782-74e1-487f-ad13-ed86cc1aacc4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="text-white md:mx-20 p-6">
      <h2 className="text-white text-center text-3xl font-semibold">
        Get in touch
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4 md:w-1/2 p-6">
          <h2 className="bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent text-2xl">
            Let's talk
          </h2>
          <p>
            I'm currently avaible to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            control anytime.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <AiOutlineMail size={25} /> <span>aqlimhakima@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <BsTelephoneForward size={20} /> <span>+923118576271</span>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn size={25} /> <span>RAWALPINDI, Pakistan</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-6">
          <form onSubmit={onSubmit} action="">
            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="">Your Name</label>
              <input
                placeholder="Enter your name "
                type="text"
                className="px-4 py-2 bg-neutral-800 rounded placeholder:text-sm"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="">Your Email</label>
              <input
                placeholder="Enter your email "
                type="email"
                className="px-4 py-2 bg-neutral-800 rounded placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <label htmlFor="">Write your message here</label>
              <textarea
                placeholder="Enter your message "
                name=""
                id=""
                rows={5}
                className="px-4 py-2 bg-neutral-800 rounded placeholder:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white mt-4  hover:scale-105 transition px-6 py-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
