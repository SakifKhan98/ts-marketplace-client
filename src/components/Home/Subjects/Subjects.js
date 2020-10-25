import React from "react";
import { subjectData } from "../../../fakeData/subjectData";
import SubjectsCard from "../SubjectsCard/SubjectsCard";

const Subjects = () => {
  return (
    <div>
      <div style={{ marginTop: 60, overflowX: "hidden" }}>
        <h1 className="text-center" style={{ fontWeight: 700 }}>
          Got an <span style={{ color: "#7AB259" }}>Assignment?</span>
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
      </div>
    </div>
  );
};

export default Subjects;
