import QrCode from "./QrCode";

interface DoctorQrCode extends QrCode {
    "doctor_id": string,
    "doctor_firstName": string,
    "doctor_lastName": string,
    "id": string
}
export default DoctorQrCode
