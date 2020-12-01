import React from "react";
import { useParams } from "react-router";
import Page from "./Page";

const QrCodeDetailPage: React.FC = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Page title="QR Code">
      <p>QR: {id}</p>
    </Page>
  );
};

export default QrCodeDetailPage;
