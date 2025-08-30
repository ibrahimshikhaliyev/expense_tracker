import { BASE_URL } from "@/lib/const";
import axios from "axios";

export async function fetcher(url = "", type = "GET") {
  let res = null;
  if (type === "GET") {
    res = await axios.get(`${BASE_URL}${url}`);
  }
  return res?.data;
}
