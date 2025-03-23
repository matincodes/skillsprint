import PastAssignment from "@/components/Cards/PastAssignment";
import PendingAssignment from "@/components/Cards/PendingAssignment";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

// Define the route for the assignment page
export const Route = createFileRoute("/dashboard/assignments")({
  component: AssignmentComponent,
});

const AssignmentComponent = () => {
  const [activePendingAssignment, setActivePendingAssignment] = useState(true);
  const [activePastAssignment, setActivePastAssignment] = useState(true);

  return (
    <div className="h-full flex flex-col ">
      {activePendingAssignment && (
        <>
          
          <PendingAssignment
            setActivePastAssignment={setActivePastAssignment}
          />
        </>
      )}
      {activePastAssignment && (
        <>
         
          <PastAssignment
            setActivePendingAssignment={setActivePendingAssignment}
          />
        </>
      )}
    </div>
  );
};
