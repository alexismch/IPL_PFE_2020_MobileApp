import BaseHistoryEntry from "./BaseHistoryEntry";
import QrCodeType from "./QrCodeType";

export default interface DoctorHistoryEntry
  extends BaseHistoryEntry<QrCodeType.DOCTOR> {
  doctor_firstName: string;
  doctor_lastName: string;
}
