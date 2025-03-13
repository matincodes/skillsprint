// PasswordStep.jsx
import React from "react";
import { Button } from "../ui/button";

export default function PasswordStep({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
}) {
  return (
    <div className="w-1/3 ml-16 flex flex-col items-center">
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full border-2 border-[#121212] text-paragraph outline-none rounded-md py-2 pl-6 mb-5"
      />

      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
        className="w-full border-2 border-[#121212] text-paragraph outline-none rounded-md py-2 pl-6 mb-5"
      />

      <Button
        onClick={onSubmit}
        className="text-white w-full bg-main cursor-pointer"
      >
        Submit
      </Button>
    </div>
  );
}
