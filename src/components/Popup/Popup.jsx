import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { CircleCheck } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PopUp = ({ open, onOpenChange, startDate, courseTitle }) => {
  const date = new Date([startDate]);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  // Format the date and time
  const localTime = date.toLocaleString("en-US", options);
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-col justify-center items-center text-center space-y-5">
              <span className="flex flex-col justify-center items-center space-y-2">
                <DotLottieReact
                  src="https://lottie.host/4f3e5b72-a62a-4a47-a1ae-4471e7100122/qIoR2WlJU8.lottie"
                  loop
                  autoplay
                  aria-setsize={10}
                />
                <DialogTitle className={"font-sora text-main text-[25px]"}>
                  Congratulations, Your Application is Complete
                </DialogTitle>
              </span>
              <DialogDescription
                className={"font-sora font-[200] leading-[30px]"}
              >
                You have successfully applied for the{" "}
                <span className="font-[500] text-main">{courseTitle}</span>{" "}
                course <br />
                Classes will start on the {localTime}. <br />
                Your class schedule will be available on your dashboard
              </DialogDescription>
            </div>
          </DialogHeader>

          <DialogFooter>
            <button
              type="submit"
              className="lg:text-base tracking-[1.5px] cursor-pointer font-semibold font-inter text-[10px] text-white py-3 px-6 bg-[#AE752C] rounded-md"
            >
              Proceed To Dashboard
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopUp;
