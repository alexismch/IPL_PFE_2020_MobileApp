import React from "react";
import { useParams } from "react-router";
import Page from "./Page";

const QrCodeValidationPage: React.FC = () => {
  const { id } = useParams();

  return (
    <Page title="QR Code" backUrl="/scanner">
      <p>QR: {id}</p>
    </Page>
  );
};

export default QrCodeValidationPage;
