import StringifiedDate from "./StringifiedDate";

export default interface NotificationFromAPI {
    id: string;
    message : string
    date : StringifiedDate
}
