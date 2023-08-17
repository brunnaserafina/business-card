import axios from "axios";

const BASE_URL = "https://randomuser.me/api";

export default function getInfo() {
  const promise = axios.get(BASE_URL);

  return promise;
}
