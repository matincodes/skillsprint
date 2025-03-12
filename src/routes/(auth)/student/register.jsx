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
  const { signup } = useAuth(); // Destructure signup from useAuth
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Called when user clicks "Continue" in the email step
  const handleContinue = () => {
    if (!name || !email) {
      toast.error("Please enter both your full name and a valid email.");
      return;
    }
    setError("");
    setStep(2);
  };

  // Called when user clicks "Submit" in the password step
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    setError("");

    try {
      await signup(name, email, password, "STUDENT");
      toast.success("Registration successful!");
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
      toast.error(err.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-black h-screen p-8">
      <img src="/assets/logo.png" alt="" className="w-[50px]" />

      <div className="w-full flex flex-col items-center mt-25">
        <h2 className="font-[700] lg:text-[36px] text-[23px] lg:leading-[60px] relative text-white pb-12">
          <img
            src={"/assets/Icons/spark.png"}
            className="absolute lg:w-[60px] w-[40px] lg:-top-[25px] lg:-left-[45px] top-[15px] left-[6px] "
          />
          Create your skill sprint account
        </h2>

        {step === 1 && (
          <EmailStep
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
            onContinue={handleContinue}
          />
        )}

        {step === 2 && (
          <PasswordStep
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            onSubmit={handleSubmit}
          />
        )}
      </div>

      <div className="text-paragraph flex justify-center text-center w-full mt-10 ml-16">
        Already have an account? {"  "}
        <Link to="/(auth)/student/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}
