import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
<<<<<<< HEAD
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
=======
        "peer cursor-pointer  data-[state=checked]:border-[#AE752C]  data-[state=unchecked]:border-[#525866] focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-4 w-7 shrink-0 items-center rounded-full border-2  shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
>>>>>>> 6fc124e308d63468a846aa98516c1457208a5ae4
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
<<<<<<< HEAD
          "bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        )}
      />
=======
          " pointer-events-none block size-2.5 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:bg-[#AE752C] data-[state=checked]:translate-x-4 data-[state=unchecked]:bg-[#525866] data-[state=unchecked]:translate-x-0"
        )} />
>>>>>>> 6fc124e308d63468a846aa98516c1457208a5ae4
    </SwitchPrimitive.Root>
  );
}

export { Switch };
