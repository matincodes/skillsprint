

"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

export default function SwitchForm() {
  const form = useForm({
    defaultValues: {
      courseNotification: true,
      liveClassReminder: true,
      newQuiz: false,
      assignmentAlerts: true,
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-9 mt-15 lg:space-y-11">
          {/* Section Title */}
          <div className="space-y-2">
            <p className="font-sora font-medium text-base text-[#DFDFDF] lg:text-lg">
              Notification Settings
            </p>
            <p className="font-inter font-light text-[10px] text-white tracking-[1px] lg:text-xs">
              Choose how you stay informed
            </p>
          </div>
          <div className="space-y-12">
            {/* Course Notification Toggle */}

            <FormField
              control={form.control}
              name="courseNotification"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between ">
                  <div className="space-y-0.5">
                    <FormLabel className="font-inter font-light tracking-[1px] text-sm lg:text-base lg:font-normal">
                      Get notified when a course you subscribed to is updated.
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Live Class Reminder Toggle */}
            <FormField
              control={form.control}
              name="liveClassReminder"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between ">
                  <div className="space-y-0.5">
                    <FormLabel className="font-inter font-light tracking-[1px] text-sm lg:text-base lg:font-normal">
                      Get reminders before Live classes or sessions start.
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* New Quiz Alerts Toggle */}
            <FormField
              control={form.control}
              name="newQuiz"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between ">
                  <div className="space-y-0.5">
                    <FormLabel className="font-inter font-light tracking-[1px] text-sm lg:text-base lg:font-normal">
                      Receive alerts when new quizzes are added.
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* Assignment Alerts Toggle */}
            <FormField
              control={form.control}
              name="assignmentAlerts"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between ">
                  <div className="space-y-0.5">
                    <FormLabel className="font-inter font-light tracking-[1px] text-sm lg:text-base lg:font-normal">
                      Get alerts about pending or upcoming assignments
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          className="text-sm font-inter rounded-lg duration-300 ease-in-out bg-main cursor-pointer px-7 py-1 mt-9 font-normal lg:text-base"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </Form>
  );
}
