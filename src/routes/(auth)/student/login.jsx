import React, { useState, useContext } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext"; // Make sure to replace with the correct path to your AuthContext
import { Button } from "../../../components/ui/button";
// import showIcon from "../../../assets/show-icon.png"; // Make sure to replace with the correct path to your show icon
// import hideIcon from "../../../assets/hide-icon.png"; // Make sure to replace with the correct path to your hide icon

export const Route = createFileRoute("/(auth)/student/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    setError("");
    try {
      await login(email, password);
      // Redirect to the desired page after successful login
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="w-1/3 ml-16 flex flex-col items-center">
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="w-full border-2 border-[#121212] text-paragraph outline-none rounded-md py-2 pl-6 mb-5"
      />

      <div className="relative w-full mb-5">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border-2 border-[#121212] text-paragraph outline-none rounded-md py-2 pl-6 pr-10"
        />
        {/*<img
          src={showPassword ? hideIcon : showIcon}
          alt="Toggle Password Visibility"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          style={{ width: "20px", height: "20px" }}
        />*/}
      </div>

      {error && <div className="text-red-500 mb-5">{error}</div>}

      <Button onClick={handleSubmit} className="text-white w-full bg-main cursor-pointer">
        Login
      </Button>
    </div>
  );
}
