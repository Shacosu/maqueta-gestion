import React from "react";

export default function Spinner() {
  return (
    <div className=" w-full min-h-[calc(100vh-200px)] flex justify-center items-center">
      <div className="flex  w-full items-center justify-center ">
        <div
          className="w-14 h-14 rounded-full animate-spin
            border border-solid border-yellow-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
}
