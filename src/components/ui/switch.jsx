import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer cursor-pointer  data-[state=checked]:border-[#AE752C]  data-[state=unchecked]:border-[#525866] focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-4 w-7 shrink-0 items-center rounded-full border-2  shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          " pointer-events-none block size-2.5 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:bg-[#AE752C] data-[state=checked]:translate-x-4 data-[state=unchecked]:bg-[#525866] data-[state=unchecked]:translate-x-0"
        )} />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
