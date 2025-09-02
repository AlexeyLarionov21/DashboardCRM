import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button
        className="flex p-0.5 hover:bg-stone-200 rounded transition-colors 
      relative items-center gap-2 w-full"
      >
        <img
          src="avatar-svgrepo-com.svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        <div className="text-start">
          <span className="font-bold block text-medium">John Doe</span>
          <span className="text-stone-500 text-xs block">
            john.doe@example.com
          </span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
};
