import React, { useState, useContext } from "react";
import { useAuth } from "@/context/AuthContext"; // Make sure to replace with the correct path to your AuthContext
import { Button } from "../../../components/ui/button";
import { Link, useNavigate} from "@tanstack/react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import showIcon from "../../../assets/show-icon.png"; // Make sure to replace with the correct path to your show icon
// import hideIcon from "../../../assets/hide-icon.png"; // Make sure to replace with the correct path to your hide icon


import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/student/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (password && password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    try {
      const success = await login(email, password);
      console.log(success);
      // Redirect to the desired page after successful login
      if (success) {
        toast.success("Login successful!");
        navigate({ to: "/" }); 
      }
    } catch (err) {
      console.error("Login error:",
        err
      );
      toast.error("Failed to login. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-black h-screen p-8">
      <img src="/assets/logo.png" alt="" className="w-[50px]" />

      <div className="w-full flex flex-col items-center mt-25">
        <h2 className="font-[700] lg:text-[36px] text-[23px] lg:leading-[60px] relative text-white pb-12 text-center px-16">
          <img
            src={"/assets/Icons/spark.png"}
            className="absolute lg:w-[60px] w-[40px] lg:-top-[25px] -top-[20px] left-[30px] lg:left-[20px]"
          />
          Welcome back to skill sprint
        </h2>

        <div className="w-full md:w-1/3 flex flex-col items-center">
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

          <Button
            onClick={handleSubmit}
            className="text-white w-full bg-main cursor-pointer"
          >
            Login
          </Button>
        </div>
      </div>

      <div className="text-paragraph flex justify-center text-center w-full mt-10">
        Don't have an account?{" "}
        <Link to="/student/register" className="underline">
          Signup
        </Link>
      </div>
    </div>
  );
}
