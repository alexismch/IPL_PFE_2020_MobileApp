import BaseHistoryEntry from "./BaseHistoryEntry";
import QrCodeType from "./QrCodeType";

export default interface LocationHistoryEntry
  extends BaseHistoryEntry<QrCodeType.LOCATION> {
  location_id: string;
  location_name: string;
  location_description: string;
  owner_id: string;
  owner_name: string;
}
