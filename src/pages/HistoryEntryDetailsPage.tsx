import React from "react";
import {useLocation, useParams} from "react-router";
import Page from "./Page";
import DoctorQrCode from "../@types/DoctorQrCode";
import LocationQrCode from "../@types/LocationQrCode";

const HistoryEntryDetailsPage: React.FC = () => {
    const data = useLocation()
    const state =  data.state as DoctorQrCode | LocationQrCode
    console.log(state)
    return (
        <Page title="QR Code" >
        </Page>
    );
};

export default HistoryEntryDetailsPage;
