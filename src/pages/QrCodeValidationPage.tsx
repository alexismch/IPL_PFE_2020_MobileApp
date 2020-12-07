import React from "react";
import { useParams } from "react-router";
import Id from "../@types/Id";
import QrCodeType from "../@types/QrCodeType";
import QrCodeValidationDetails from "../components/QrCodeValidationDetails";
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
      <QrCodeValidationDetails
        name="Le Coriandre"
        desc="Très bon restaurant situé dans le coin du balait à Boisfort"
      />
    </Page>
  );
};

export default QrCodeValidationPage;
