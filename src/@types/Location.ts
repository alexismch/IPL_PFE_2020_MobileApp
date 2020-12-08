import Id from "./Id";

export default interface Location {
  name: string;
  description: string;
  id: Id;
  owner_id: Id;
  owner_name: string;
}
