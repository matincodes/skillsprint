import React, { useState } from "react";
import PasswordStep from "@/components/PasswordStep/PasswordStep";
import EmailStep from "@/components/EmailStep/EmailStep";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/student/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  // Destructure from AuthContext
  const { signup, isLoading } = useAuth();

  // Step management & form fields
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  // Basic regex: Only letters/spaces, at least 3 chars
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  // Basic email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Step 1: Validate name & email
  const handleContinue = (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Please enter both your full name and your email.");
      return;
    }

    if (!nameRegex.test(name.trim())) {
      toast.error("Please enter a valid name (at least 3 letters).");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email.");
      return;
    }

    // Move to password step
    setStep(2);
  };

  // Step 2: Validate password & call signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      // Attempt signup
      const success = await signup({name, email, password, role: "STUDENT"});
      if (success) {
        navigate({ to: "/programmes" });
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center bg-black h-screen p-8">
      <img src="/assets/logo.png" alt="" className="w-[50px]" />

      <div className="w-full flex flex-col items-center mt-25">
        <h2 className="text-center font-[700] lg:text-[36px] text-[23px] lg:leading-[60px] relative text-white pb-12">
          <img
            src={"/assets/Icons/spark.png"}
            className="absolute lg:w-[60px] w-[40px] lg:-top-[25px] lg:-left-[45px] -top-[20px] left-[6px] "
          />
          <span className="block lg:hidden">Create your</span>
          <span className="hidden lg:block">
            Create your skill sprint account
          </span>
          <span className="block lg:hidden">skill sprint account</span>
        </h2>

        {step === 1 && (
          <form
            onSubmit={handleContinue}
            className="w-full flex flex-col items-center"
          >
            <EmailStep
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              onContinue={handleContinue}
            />
          </form>
        )}

        {step === 2 && (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <PasswordStep
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </form>
        )}
      </div>

      <div className="text-paragraph flex justify-center text-center w-full mt-10">
        Already have an account?{" "}
        <Link to="/student/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}

export default RouteComponent;
