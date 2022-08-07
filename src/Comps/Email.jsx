import React from "react";
import { UilEnvelope } from "@iconscout/react-unicons";
import { useState } from "react";

function Email() {
  const [mail, setMail] = useState("");
  function onSub() {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mail !== "" && re.test(mail)) alert("You have been subscribed!");
    else alert("invalid input ");
  }
  return (
    <div className=" flex flex-col items-center font-mono text-white font-light text-center ">
      <hr className="mt-10 shadow-xl focus:outline-none" />
      <p className=" font-mono bg-black/50 flex my-6  font-light p-2  shadow-xl focus: outline-dotted">
        Enter Email and Get The Current Weather Daily!
      </p>
      <div>
        <UilEnvelope />
        <form>
          <input
            type="email"
            placeholder="username@gmail.com"
            onChange={(e) => setMail(e.currentTarget.value)}
            className="font-mono text-black text-xl font-light p-2 w-full shadow-xl focus:outline-none"
          />
        </form>
      </div>
      <div className="font-mono bg-black/50 flex my-6  font-light p-2 shadow-xl focus: outline-dashed">
        <button
          className="flex justify-center place-items-center text-center"
          onClick={onSub}
        >
          <p>Subscribe!</p>
        </button>
      </div>{" "}
      */}
    </div>
  );
}

export default Email;
