import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import Page from "./Page";
import axios from "axios";
import QrCodeDetails from "../components/QrCodeDetails";

const QrCodeDetailPage: React.FC = () => {
  const { id } = useParams();
  const newID = parseInt(id);
  const [qrCode, setQrCode] = useState([])
  const hook = () => {
    console.log('effect')
    axios
        .get('http://localhost:3001/qrCodesHistory')
        .then(response => {
          console.log('promise fulfilled')
          setQrCode(response.data)
        })
  }
  useEffect(hook, [])
  return (
    <Page title="QR Code" backUrl="/scanner">
      <p>QR: {id}</p>
        {qrCode[newID-1]?
            <QrCodeDetails name = {qrCode[newID-1]["name"]} type ={qrCode[newID-1]["type"]} datetime={qrCode[newID-1]["datetime"]} />:
            <p>Chargement </p>
        }
    </Page>
  );
};

export default QrCodeDetailPage;
