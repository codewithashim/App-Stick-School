import React from "react";
import Link from "next/link";
import {FaCalendarAlt} from "react-icons/fa"

const PhotoGelary = () => {
  return (
    <section>
      <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Album Name 
          </h5>
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased flex items-center gap-2">
          <FaCalendarAlt/>
          06 Apr, 22 02:00 PM
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          31 File
          </p>
        </div>
        <div class="p-6 pt-0">
          <Link
          href="/"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            View Album
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGelary;
