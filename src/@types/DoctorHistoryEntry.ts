import BaseHistoryEntry from "./BaseHistoryEntry";
import Id from "./Id";
import QrCodeType from "./QrCodeType";

export default interface DoctorHistoryEntry
  extends BaseHistoryEntry<QrCodeType.DOCTOR> {
  doctor_id: Id;
  doctor_firstName: string;
  doctor_lastName: string;
}
