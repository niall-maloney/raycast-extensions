import { open } from "@raycast/api";

export default async () => {
  const url = "devutils://php2json?clipboard";
  open(url);
};
