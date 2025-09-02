import React from "react";
import { StatCards } from "./StatCards";

export const Grid = () => {
  //grid gap-3 grid-cols-12
  return (
    <div className="px-4 gap-3 grid grid-cols-12 mt-4">
      <StatCards />
    </div>
  );
};
