import Id from "./Id";
import StringifiedDate from "./StringifiedDate";

export default interface NotificationFromAPI {
  id: Id;
  message: string;
  date: StringifiedDate;
}
