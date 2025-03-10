import React, { useState } from "react";
import PasswordStep from "@/components/PasswordStep/PasswordStep";
import EmailStep from "@/components/EmailStep/EmailStep";
import { useAuth } from "@/context/AuthContext"; 

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/student/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const { signup } = useAuth(); // Destructure signup from useAuth
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Called when user clicks "Continue" in the email step
  const handleContinue = () => {
    if (!email) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setStep(2);
  };

  // Called when user clicks "Submit" in the password step
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    try {
      await signup(name, email, password, "STUDENT");
      alert("Registration successful!");
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-black h-screen p-8">
      <img src="/assets/logo.png" alt="" className="w-[50px]" />

      <div className="w-full h-full flex flex-col items-center mt-25">
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
    </div>
  );
}
