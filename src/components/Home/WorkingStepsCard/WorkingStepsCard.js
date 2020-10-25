import React from "react";
import "./WorkingStepsCard.css";

const WorkingStepsCard = ({ steps }) => {
  return (
    <div className="col-md-4 mt-3 d-flex justify-content-center  ">
      <div
        style={{ width: "60%", border: "none" }}
        className="card  mt-3 text-center"
      >
        <img
          className="mx-auto"
          style={{ width: 74, height: 74 }}
          src={steps.image}
          alt="steps.name"
        />

        <div className="card-body">
          <h5 style={{ fontWeight: 800 }} className="card-title">
            {steps.name}
          </h5>
          <p className="card-text">{steps.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingStepsCard;
