import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilEnter } from "@iconscout/react-unicons";

function Understand() {
  return (
    <div>
      <div className="flex flex-row-strech justify-center text-white font-light p-2 w-full text-m shadow-xl focus:outline-none ">
        Use
        <a className="text-orange-300 text-lg pr-1 pl-2"> "Enter"</a>
        <UilEnter className="inline-block allign-center pr-2" size={28} /> or
        click on the
        <a className="text-orange-300 text-lg pr-1 pl-2">"Search"</a>{" "}
        <UilSearch className="inline-block allign-center pr-2" size={28} />
        icon to check the weather
      </div>
    </div>
  );
}

export default Understand;
