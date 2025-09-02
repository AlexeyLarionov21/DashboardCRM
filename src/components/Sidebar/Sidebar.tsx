import React from "react";
import { AccountToggle } from "./AccountToggle";
import { RouteSelect } from "./RouteSelect";
import { Search } from "./Search";
import { Plan } from "./Plan";

export const Sidebar = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-4 mt-[16px]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      <div className="mt-auto pt-6">
        <Plan />
      </div>
    </div>
  );
};
