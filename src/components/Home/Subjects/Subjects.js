import React from "react";
import { subjectData } from "../../../fakeData/subjectData";
import SubjectsCard from "../SubjectsCard/SubjectsCard";

const Subjects = () => {
  return (
    <div
      style={{
        marginTop: 60,
        overflowX: "hidden",
        backgroundColor: "#f7f7f7",
        padding: 50,
      }}
    >
      <h1 className="text-center mb-5" style={{ fontWeight: 700 }}>
        Here are some most{" "}
        <span style={{ color: "#7AB259" }}>Popular Subjects</span>
      </h1>
      <div
        style={{ paddingRight: 50, paddingLeft: 50 }}
        className="row d-flex justify-content-center"
      >
        {subjectData.map((sbjct) => (
          <SubjectsCard key={sbjct.id} subject={sbjct}>
            {sbjct.name}
          </SubjectsCard>
        ))}
      </div>
      <div
        style={{ marginTop: 30 }}
        className="row d-flex justify-content-center mx-auto"
      >
        <button className="text-white  btn btn-brand">See More</button>
      </div>
    </div>
  );
};

export default Subjects;
