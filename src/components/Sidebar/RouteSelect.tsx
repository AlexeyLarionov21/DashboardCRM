import React from "react";
import { IconType } from "react-icons";
import {
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="flex flex-col gap-2">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUsers} selected={false} title="Team" />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" />
      <Route Icon={FiLink} selected={false} title="Integrations" />
      <Route Icon={FiDollarSign} selected={false} title="Finance" />
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5
     text-sm transition-[box-shadow,_background-color,_color] ${
       selected
         ? "bg-white text-stone-950 shadow"
         : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
     }`}
    >
      <Icon className={`${selected ? "text-violet-500" : ""}`} />
      <span>{title}</span>
    </button>
  );
};
