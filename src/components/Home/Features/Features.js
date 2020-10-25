import React from "react";
import { featureData } from "../../../fakeData/featureData";
import FeaturesCard from "../FeaturesCard/FeaturesCard";

const Features = () => {
  const features = featureData;
  return (
    <div style={{ marginTop: 60, overflowX: "hidden" }}>
      <h1 className="text-center" style={{ fontWeight: 700 }}>
        Our Great <span style={{ color: "#7AB259" }}>Features</span>
      </h1>
      <div
        style={{ paddingRight: 50, paddingLeft: 50 }}
        className="row d-flex justify-content-center"
      >
        {features.map((ftrs) => (
          <FeaturesCard key={ftrs.id} features={ftrs}>
            {ftrs.name}
          </FeaturesCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
