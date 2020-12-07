import React from "react";
import { Redirect, useParams } from "react-router";
import Id from "../@types/Id";
import Page from "./Page";

const QrCodeValidationPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: Id }>();

  if (type === "l") return <Redirect to={`/qr/location/${id}`} />;
  if (type === "d") return <Redirect to={`/qr/doctor/${id}`} />;
  if (type !== "doctor" && type !== "location") return <Redirect to="/404" />;

  return (
    <Page title="QR Code" backUrl="/scanner">
      <p>QR: {id}</p>
    </Page>
  );
};

export default QrCodeValidationPage;
