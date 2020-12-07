import QrCodeType from "./QrCodeType";
import StringifiedDate from "./StringifiedDate";

export default interface ScanData {
  id: string;
  type: QrCodeType;
  scanDate: StringifiedDate;
}
