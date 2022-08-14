import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilEnter } from "@iconscout/react-unicons";

function Understand() {
  return (
    <div>
      <div className="use">
        {/* flex flex-row-strech justify-center text-white font-light p-2 w-full text-m shadow-xl focus:outline-none */}
        Use
        <a className="enter"> "Enter"</a>
        {/* text-orange-300 text-lg pr-1 pl-2" */}
        <UilEnter
          className="uilEnter"
          // "inline-block allign-center pr-2
          size={28}
        />{" "}
        or click on the
        <a className="search">"Search"</a>{" "}
        {/* text-orange-300 text-lg pr-1 pl-2" */}
        <UilSearch className="uilSearch" size={28} />
        {/* inline-block allign-center pr-2" */}
        icon to check the weather
      </div>
    </div>
  );
}

export default Understand;
