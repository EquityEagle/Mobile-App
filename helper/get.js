import axios from "axios";
import { BASE_URL } from "./uri";

export async function getAccounts(userId) {
  const response = await axios.get(`${BASE_URL}/metrix/find/${userId}/all`);
  return response?.data;
}

export async function getAccountTrades(metrixId) {
  const response = await axios.get(
    `${BASE_URL}/metrix/find/${metrixId}/one/trades/`
  );
  return response?.data;
}

export async function getAccountsProfitData(metrixId) {
  const response = await axios.get(
    `${BASE_URL}/metrix/find/${metrixId}/one/p/data`
  );
  return response?.data;
}
