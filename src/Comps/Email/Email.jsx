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
  const detectKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      console.log("Key Clicked:Enter");
      onSub();
    }
  };

  return (
    <div className="enter_email">
      {/* //" flex flex-col items-center font-mono text-white font-light text-center "> */}
      <hr className="hr_line" />
      {/* mt-5 shadow-xl" / */}
      <p className="inner_email">
        {/* font-mono  flex mt-4  font-light shadow-xl */}
        Enter Email and Get The Current Weather Daily!
      </p>
      <div>
        <UilEnvelope />

        <input
          type="email"
          placeholder="username@gmail.com"
          onChange={(e) => setMail(e.currentTarget.value)}
          onKeyDown={detectKeyDownEnter}
          className="email_input"
        />
        {/*"font-serif text-black text-xl font-light p-2 w-full rounded-md  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-red-500 invalid:text-red-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"  */}
      </div>
      <div className="subscription_button_container">
        <button className="sub_button " onClick={onSub}>
          <p>Subscribe!</p>
        </button>
      </div>{" "}
    </div>
  );
}

export default Email;
