import React from "react";
import { useForm, Controller } from "react-hook-form";

// Form for toggling notification settings
const NotificationToggleForm = () => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      courseNotification: true,
      liveClassReminder: false,
      newQuiz: false,
      assignmentAlerts: true, // Default state for each toggle
    },
  });

  // Form submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="space-y-9 mt-15 lg:space-y-11"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Section Title */}
      <div className="space-y-2">
        <p className="font-sora font-medium text-base text-[#DFDFDF] lg:text-lg">
          Notification Settings
        </p>
        <p className="font-inter font-light text-[10px] text-white tracking-[1px] lg:text-xs">
          Choose how you stay informed
        </p>
      </div>

      {/* Course Notification Toggle */}
      <div className="flex items-center font-inter font-light tracking-[1px] text-sm gap-7 justify-between lg:text-base lg:font-normal">
        <label htmlFor="course">
          Get notified when a course you subscribed to is updated.
        </label>
        <Controller
          name="courseNotification"
          control={control}
          render={({ field }) => (
            <button
              type="button"
              className={`w-12 h-6 flex items-center rounded-full p-1 ${field.value ? "border border-[#AE752C]" : "border border-[#525866]"}`}
              onClick={() => field.onChange(!field.value)}
            >
              {/* Switch button */}
              <div
                className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  field.value
                    ? "translate-x-6 bg-[#AE752C]"
                    : "translate-x-0 bg-[#525866]"
                }`}
              />
            </button>
          )}
        />
      </div>

      {/* Live Class Reminder Toggle */}
      <div className="flex items-center font-inter text-sm justify-between gap-9 font-light leading-5 tracking-[1px] lg:text-base lg:font-normal">
        <label htmlFor="subscribed">
          Get reminders before Live classes or sessions start.
        </label>
        <Controller
          name="liveClassReminder"
          control={control}
          render={({ field }) => (
            <button
              type="button"
              className={`w-12 h-6 flex items-center rounded-full p-1 ${field.value ? "border border-[#AE752C]" : "border border-[#525866]"}`}
              onClick={() => field.onChange(!field.value)}
            >
              <div
                className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  field.value
                    ? "translate-x-6 bg-[#AE752C]"
                    : "translate-x-0 bg-[#525866]"
                }`}
              />
            </button>
          )}
        />
      </div>

      {/* New Quiz Alerts Toggle */}
      <div className="flex items-center font-inter gap-9 text-sm justify-between font-light leading-5 tracking-[1px] lg:text-base lg:font-normal">
        <label htmlFor="updated">
          Receive alerts when new quizzes are added.
        </label>
        <Controller
          name="newQuiz"
          control={control}
          render={({ field }) => (
            <button
              type="button"
              className={`w-12 h-6 flex items-center rounded-full p-1 ${field.value ? "border border-[#AE752C]" : "border border-[#525866]"}`}
              onClick={() => field.onChange(!field.value)}
            >
              <div
                className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  field.value
                    ? "translate-x-6 bg-[#AE752C]"
                    : "translate-x-0 bg-[#525866]"
                }`}
              />
            </button>
          )}
        />
      </div>

      {/* Assignment Alerts Toggle */}
      <div className="flex items-center font-inter font-light leading-5 gap-9 tracking-[1px] text-sm justify-between lg:text-base lg:font-normal">
        <label htmlFor="notification">
          Get alerts about pending or upcoming assignments
        </label>
        <Controller
          name="assignmentAlerts"
          control={control}
          render={({ field }) => (
            <button
              type="button"
              className={`w-12 h-6 flex items-center rounded-full p-1 ${field.value ? "border border-[#AE752C]" : "border border-[#525866]"}`}
              onClick={() => field.onChange(!field.value)}
            >
              <div
                className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  field.value
                    ? "translate-x-6 bg-[#AE752C]"
                    : "translate-x-0 bg-[#525866]"
                }`}
              />
            </button>
          )}
        />
      </div>

      {/* Submit Button */}
      <button
        className="text-sm font-inter rounded-lg duration-300 ease-in-out bg-main cursor-pointer px-7 py-1 mt-5 font-normal lg:text-base"
        type="submit"
      >
        Save Changes
      </button>
    </form>
  );
};

export default NotificationToggleForm;
