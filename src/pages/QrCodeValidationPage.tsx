import React from "react";
import { useParams } from "react-router";
import Id from "../@types/Id";
import QrCodeType from "../@types/QrCodeType";
import NotFoundPage from "./NotFoundPage";
import Page from "./Page";

const QrCodeValidationPage: React.FC = () => {
  let { type, id } = useParams<{ type: string; id: Id }>();

  if (type === "l") type = QrCodeType.LOCATION;
  if (type === "d") type = QrCodeType.DOCTOR;
  if (type !== QrCodeType.DOCTOR && type !== QrCodeType.LOCATION)
    return <NotFoundPage />;

  return (
    <Page title="QR Code" backUrl="/scanner">
      <p>QR: {id}</p>
    </Page>
  );
};

export default QrCodeValidationPage;
