import React from "react";

const FeaturesCard = ({ features }) => {
  return (
    <div className="col-md-4 mt-3 row justify-content-center  ">
      <div
        style={{ margin: 0, width: "60%", padding: 20 }}
        className="row card text-center mt-5 "
      >
        <img
          className="mx-auto"
          style={{ width: 74, height: 74 }}
          src={features.image}
          alt={features.name}
        />

        <div className="card-body">
          <h5 style={{ fontWeight: 800 }} className="card-title">
            {features.name}
          </h5>
          <p className="card-text">{features.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
