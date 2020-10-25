import React from "react";
import { stepsData } from "../../../fakeData/stepsData";
import WorkingStepsCard from "../WorkingStepsCard/WorkingStepsCard";

const WorkingSteps = () => {
  const workingSteps = stepsData;
  return (
    <div style={{ marginTop: 60, overflowX: "hidden" }}>
      <h1 className="text-center" style={{ fontWeight: 700 }}>
        Got an <span style={{ color: "#7AB259" }}>Assignment?</span>
      </h1>
      <div
        style={{ paddingRight: 50, paddingLeft: 50 }}
        className="row d-flex justify-content-center"
      >
        {workingSteps.map((stps) => (
          <WorkingStepsCard key={stps.id} steps={stps}>
            {stps.name}
          </WorkingStepsCard>
        ))}
      </div>
    </div>
  );
};

export default WorkingSteps;
