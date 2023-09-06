import Image from "next/image";
import React from "react";

const PreLoader = () => {
  return (
    <div className="bg-white left-0 right-0 fixed h-[100vh] w-[100vw] z-40 flex justify-center items-center ">
      <div className="animate-loadershake">
      <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>
      </div>
    </div>
  );
};

export default PreLoader;