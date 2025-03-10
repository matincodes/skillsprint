"use client";

import { LockKeyhole, LockKeyholeOpen } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Password settings form component
export function PasswordSettings() {
  const [hidePassword1, setHidePassword1] = useState(true); // Toggle for password 1 visibility
  const [hidePassword2, setHidePassword2] = useState(true); // Toggle for password 2 visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize form handling

  const onSubmit = (data) => console.log(data); // Form submit handler

  return (
    <div>
      {/* Section title */}
      <span className="space-y-2">
        <p className="font-sora font-medium text-base text-[#DFDFDF] lg:text-lg">
          Password Settings
        </p>
        <p className="font-inter font-light text-[10px] text-white tracking-[1px] lg:text-xs">
          Modify your password
        </p>
      </span>

      {/* Form section */}
      <form
        className="flex flex-col items-start mt-10 space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full space-y-9 lg:space-y-5 lg:flex lg:gap-30 gap-5">
          {/* Current Password */}
          <div className="flex flex-col w-full">
            <div className="h-8 border-b-2 w-full flex justify-between border-[#282828]">
              <input
                type={hidePassword1 ? "password" : ""}
                className="outline-0 w-full font-inter text-xs font-light px-3 text-paragraph lg:text-sm"
                placeholder={
                  hidePassword1 ? "*************" : "Current Password"
                }
                {...register("Password", { required: true })}
              />
              {hidePassword1 ? (
                <LockKeyhole
                  onClick={() => setHidePassword1(false)}
                  height={18}
                  className="text-[#AE752C] cursor-pointer"
                />
              ) : (
                <LockKeyholeOpen
                  onClick={() => setHidePassword1(true)}
                  height={18}
                  className="text-[#AE752C] cursor-pointer"
                />
              )}
            </div>
            {errors.Password && (
              <span className="font-normal text-sm text-red-500">
                fill cannot be empty
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col w-full">
            <div className="h-8 border-b-2 w-full flex justify-between border-[#282828]">
              <input
                type={hidePassword2 ? "password" : ""}
                className="outline-0 w-full font-inter text-xs font-light px-3 text-paragraph lg:text-sm"
                placeholder={
                  hidePassword2 ? "*************" : "Current Password"
                }
                {...register("comfirmedPassword")}
              />
              {hidePassword2 ? (
                <LockKeyhole
                  onClick={() => setHidePassword2(false)}
                  height={18}
                  className="text-[#AE752C] cursor-pointer"
                />
              ) : (
                <LockKeyholeOpen
                  onClick={() => setHidePassword2(true)}
                  height={18}
                  className="text-[#AE752C] cursor-pointer"
                />
              )}
            </div>
            {errors.Password && (
              <span className="font-normal text-sm text-red-500">
                fill cannot be empty
              </span>
            )}
          </div>
        </div>

        {/* Submit button */}
        <button
          className="text-sm font-inter rounded-lg duration-300 ease-in-out border border-main text-main hover:bg-main hover:text-white px-7 py-1 mt-5 font-normal lg:text-base cursor-pointer"
          type="submit"
        >
          Save Password
        </button>
      </form>
    </div>
  );
}
