import Id from "./Id";
import StringifiedDate from "./StringifiedDate";

export default interface Notification {
  id: Id;
  message: string;
  date: StringifiedDate;
}
