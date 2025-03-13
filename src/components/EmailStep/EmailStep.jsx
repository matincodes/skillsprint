import React from "react";
import { Button } from "../ui/button";

export default function EmailStep({ name, setName, email, setEmail, onContinue }) {
  return (
    <div className="w-1/3 ml-16 flex flex-col items-center">
      <input
        id="name"
        type="text"
        value={name}
        autoComplete="off"
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Full Name"
        className="w-full border-2 border-[#121212] text-paragraph outline-none rounded-md py-2 pl-6 mb-5"
      />
      <input
        id="email"
        type="email"
        value={email}
        autoComplete="off"
        required
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        className="w-full border-2 border-[#121212] text-paragraph outline-none rounded-md py-2 pl-6 mb-5"
      />
      <Button onClick={onContinue} className="text-white w-full bg-main cursor-pointer">
        Proceed
      </Button>
    </div>
  );
}
