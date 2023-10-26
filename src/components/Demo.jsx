import { useState, useEffect } from "react";
import { copy, link, loader, tick } from "../assets";

const handleSubmit = () => {};

const handleChange = () => {};

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/*search here*/}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={link}
            alt="link icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={handleChange}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Enter
          </button>
        </form>
        {/*browse url history here*/}
      </div>
      {/*display results here*/}
    </section>
  );
};

export default Demo;
