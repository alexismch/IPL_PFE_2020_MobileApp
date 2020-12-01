import React from "react";
import RegisterContainer from "../components/RegisterContainer";
import Page from "./Page";

const Tab1: React.FC = () => {
  return (
    <Page title="Start Menu">
      <RegisterContainer name="S'enregistrer" />
    </Page>
  );
};

export default Tab1;
