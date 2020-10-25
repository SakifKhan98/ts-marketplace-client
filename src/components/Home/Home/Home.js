import React from "react";
import Features from "../Features/Features";
import Header from "../Header/Header";
import NavBarRB from "../NavBarRB/NavBarRB";
import Subjects from "../Subjects/Subjects";
import WorkingSteps from "../WorkingSteps/WorkingSteps";

const Home = () => {
  return (
    <div>
      <NavBarRB></NavBarRB>
      <Header></Header>
      <WorkingSteps></WorkingSteps>
      <Features></Features>
      <Subjects></Subjects>
    </div>
  );
};

export default Home;
