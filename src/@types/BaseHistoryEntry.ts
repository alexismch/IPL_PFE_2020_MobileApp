import Id from "./Id";
import QrCodeType from "./QrCodeType";
import StringifiedDate from "./StringifiedDate";

export default interface BaseHistoryEntry<T extends QrCodeType> {
  type: T;
  id: Id;
  scanDate: StringifiedDate;
}
