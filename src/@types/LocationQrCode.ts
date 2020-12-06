import QrCode from "./QrCode";

export default interface InstitutionQrCode extends QrCode{
    "location_id": string,
    "location_name": string,
    "location_description": string,
    "owner_id": string,
    "owner_name": string,
}