import React from "react";
import Scanner from "../components/Scanner";
import Page from "./Page";

const ScannerPage: React.FC = () => {
  return (
    <Page title="Scanner">
      <Scanner />
    </Page>
  );
};

export default ScannerPage;
