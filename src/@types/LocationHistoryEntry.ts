import BaseHistoryEntry from "./BaseHistoryEntry";
import QrCodeType from "./QrCodeType";

export default interface LocationHistoryEntryReturned
  extends BaseHistoryEntry<QrCodeType.LOCATION> {
  location_name: string;
  location_description: string;
  owner_name: string;
}
