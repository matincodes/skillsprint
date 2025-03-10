// PasswordStep.jsx
import React from "react";

export default function PasswordStep({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
}) {
  return (
    <div>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="border border-gray-300 p-2"
      />

      <input
        id="confirmPassword"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm password"
        className="border border-gray-300 p-2"
      />

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
