import React from "react";
import "./SubjectsCard.css";

const SubjectsCard = ({ subject }) => {
  return (
    <div className="col-md-4 mt-3 d-flex justify-content-center  ">
      <div style={{ width: "60% " }} class="card mb-3">
        <img
          style={{ maxWidth: 400, height: 150 }}
          class="card-img-top"
          src={subject.image}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{subject.name}</h5>
          <p class="card-text">Starts from {subject.description}$</p>
        </div>
      </div>
    </div>
  );
};

export default SubjectsCard;
