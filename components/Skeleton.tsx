import React from "react";

export const Skeleton = () => {
  return (
    <div className="flex flex-col h-screen p-4 gap-4">
      <div className="grow w-full rounded-xl  bg-slate-400 animate-pulse"></div>
      <div className="animate-pulse flex gap-2">
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
        <div className="aspect-square w-full bg-slate-400 rounded-lg  "></div>
      </div>
    </div>
  );
};
